const staff_members_models=require('../models/staff_members_models')
const express = require('express')
const { compareSync } = require('bcrypt')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


router.route('/login')
.post(async(req,res)=>{
    const staff=await staff_members_models.findOne({email:req.body.email})
    if(staff){
        const correctPassword=await bcrypt.compare(req.body.password,staff.password)
        if(correctPassword){
            const token = jwt.sign({_id: staff._id  , role:staff.role}, process.env.TOKEN_SECRET )
            res.header('token', token)
            return res.send(token)
        }
        return res.status(401).send('Invalid password')
    }
    return res.status(401).send('Invalid email')
})

router.route('/signOut')
.get((req,res)=>{
    res.send('/login')
})

router.route('/resetPassword')
.post(async(req,res)=>{

    
})
module.exports = router