const staff_members_models = require('../models/staff_member_models').model
const staff_member_routes = require('./staff_member_routes')
const express = require('express')
const { compareSync } = require('bcrypt')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const location_model = require('../models/location_model').model



var firstPass = ""

require('dotenv').config()

router.route('/login')
    .post(async (req, res) => {
        // const arr = JSON.parse(req.body)
        // console.log(arr)
        console.log(req.body.password == null)
        const firstLogin = false

        const staff = await staff_members_models.findOne({ email: req.body.email })
        if (staff) {
            //const correctPassword=await bcrypt.compare(req.body.password,staff.password)

            console.log("correct password: ", staff.password)
            console.log("entered password: ", req.body.password)
            if (bcrypt.compare(req.body.password,firstPass)) {
                firstLogin=true
            }
            
            //if(correctPassword){
            if (bcrypt.compare(req.body.password,staff.password)) {
                const token = jwt.sign({ _id: staff._id, role: staff.role }, process.env.TOKEN_SECRET)
                res.header('token', token)
                if(firstLogin){
                    res.send('/resetPassword')
                }

                res.send("Success")
                // return res.redirect('/homePage')
            }
            return res.status(401).send('Invalid password')
        }

        
        return res.status(401).send('Invalid email')
    })



router.route('/addStaff')
    .post(async (req, res) => {
        const email = req.body.email
        const user = await staff_members_models.findOne({ email: email })
        console.log("finding mail")
     
        //doing anything in the database takes time so we should await and async
        if (!user) {
            console.log("if not user")
            const salt = await bcrypt.genSalt(10)
            const newPassword = await bcrypt.hash("123456", salt)
            firstPass = newPassword
            var staffType,memberID
            if(req.body.role=="HR members"){
                staffType = "hr"
            }
            else{
                staffType = "academic"
            }

            const officeName = req.body.office


            if (req.body.office == null){
                res.send('must specify an office (try c2.110)')
            }
            const office = await location_model.findOne({ name: req.body.office })
            if(!office){
                res.send('this is not a valid office')
            }
            if(office.capacity==office.officeMembers){
                res.send('this office is already full')
            }
            office.officeMembers =  office.officeMembers +1
            try {
                console.log('saving office')
                await office.save()

            }
            catch (Err) {
                console.log(Err)
                res.send("error saving office")
            }
            

            const newUser = new staff_members_models({
                name: req.body.name,
                email: req.body.email,
                password: newPassword,
                role: req.body.role,
                dayOff:req.body.dayOff,
                salary:req.body.salary,
                staffType: staffType,
                officeLocation: office 
            })
            if(staffType=="hr"){
                newUser.dayOff = "Saturday"
            }
            else if(req.body.dayOff!=null){
                newUser.dayOff = req.body.dayOff
            }
            




            if(req.body.attendance!=null){
                newUser.attendance = req.body.attendance
            }
            if(req.body.annualLeavesBalance!=null){
                newUser.annualLeavesBalance = req.body.annualLeavesBalance
            }
            if(req.body.leaves!=null){
                newUser.leaves = req.body.leaves
            }
            if(req.body.workingSchedule!=null){
                newUser.workingSchedule = req.body.workingSchedule
            }
            if(req.body.department!= null){
                newUser.department = req.body.department
            }
            if(req.body.faculty!= null){
                newUser.faculty = req.body.faculty
            }
            


            try {
                console.log("saving user")
                console.log(newUser.id)
                await newUser.save()
                memberID = staffType + "-" + newUser.numberID
                newUser.memberID = memberID
                await newUser.save()

            }
            catch (Err) {
                console.log(Err)
                res.send("Mongo error")
            }
            return res.send(newUser)
        }
        res.send('Email already registered')
    })

router.route('/addSampleOffice').post(async (req, res) => {

    const office = await location_model.findOne({ name: req.body.name })
     
        if (!office) {
    const newOffice = new location_model({
        type: "office",
        name: req.body.name,
        capacity: req.body.capacity,
        officeMembers: 0,

    })
    try {
        
        await newOffice.save()
    }
    catch (Err) {
        console.log(Err)
        res.send("error adding office")
    }
    return res.send(newOffice)    
        }

        res.send('office '+ req.body.name+' is already there')


})




module.exports = router