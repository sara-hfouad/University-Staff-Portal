const staff_members_models = require('../models/staff_member_models').model
const staff_member_routes = require('./staff_member_routes')
const slot_model = require('../models/slot_model').model
const course_model = require('../models/course_model').model
const express = require('express')
const { compareSync } = require('bcrypt')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { request } = require('express')
const { Query } = require('mongoose')
const { staffSchema } = require('../models/staff_member_models')
const e = require('express')
const location_model = require('../models/location_model').model

router.route('/addSlot')
    .post(async (req, res) => {
        const staffId = req.user._id;
        const staff = await staff_members_models.findOne({ _id: staffId })
        if (staff) {
            if (staff.role != "courseCoordinators") {
                res.send("Must be a coordinator to add a slot")
            }
            var isfound = "false"
            for (let index = 0; index < staff.coordinatorCourse.length; index++) {
                if (staff.coordinatorCourse[index] == req.body.courseTaught) {
                    isfound = "true"
                }
            }
            if (isfound == "false") {
                console.log("wrong course")
                res.send("You are not the coordinator of this course")
            }
            else {
                if (req.body.type == null || req.body.time == null || req.body.courseTaught == null || req.body.location == null)
                    res.send("missing inputs")
                const findTime = await slot_model.findOne({ time: req.body.time })
                const findLocation = await slot_model.findOne({ location: req.body.location })
                const office = await location_model.findOne({ name: req.body.location })
                if (!office) {
                    return res.send("Invalid location")
                }
                if (findTime && findLocation) {
                    res.send("overlapping slots")
                }
                else {
                    console.log("started adding new values")
                    var slot = new slot_model(
                        {
                            type: req.body.type,
                            time: req.body.time,
                            courseTaught: req.body.courseTaught,
                            location: req.body.location,
                            courseCoordinatorID: staff.memberID
                        }
                    )

                    try {
                        // await slot.save()
                        // const slotId="-" + slot.numberID
                        // staff.slotID=slotID
                        await slot.save()
                        const course = await course_model.findOne({ courseName: req.body.courseTaught })
                        if (course) {
                            await course.teachingSlots.push(slot.numberID)
                            await course.save()
                            res.send("Successfully added")
                        }
                    }
                    catch (Err) {
                        console.log(Err)
                        res.send("Mongo error")
                    }


                }
            }
            res.send("This course does not exist")
        }
    })


router.route('/deleteSlot')
    .post(async (req, res) => {
        const staffId = req.user._id;
        const staff = await staff_members_models.findOne({ _id: staffId })
        console.log("The coordinator is" + staff)
        if (staff) {
            const bodyinput = req.body.numberID
            console.log("bodyInput is" + bodyinput)
            const slotToDelete = await slot_model.findOne({ numberID: bodyinput })

            if (slotToDelete) {
                console.log("Slot to delete is" + slotToDelete)
                var isfound = "false"
                for (let index = 0; index < staff.coordinatorCourse.length; index++) {
                    if (staff.coordinatorCourse[index] == slotToDelete.courseTaught) {
                        isfound = "true"
                    }
                }
                if (isfound == "false") {
                    res.send("You are not a coordinator on this course")
                }
                else {
                    await slot_model.remove(slotToDelete, function (err, result) {
                        if (err) {
                            console.err(err);
                        }
                    });
                    const coursemodify = await course_model.findOne({ courseName: slotToDelete.courseTaught })
                    const SlotArray = await coursemodify.teachingSlots
                    for (let index = 0; index < coursemodify.teachingSlots.length; index++) {
                        if (coursemodify.teachingSlots[index] == req.body.numberID) {
                            coursemodify.teachingSlots.splice(index, 1)
                            console.log("I entered")
                        }
                    }
                    try {
                        coursemodify.save()
                    }
                    catch (Err) {
                        console, log(Err)
                        res.send("Mongo error")
                    }
                    return res.send("Successfully deleted")
                }
            }
            return res.send("Slot does not exist")
        }
    })
//input that should be present is the slotID that needs to be updated
router.route('/updateSlot')
    .post(async (req, res) => {
        const staffId = req.user._id;
        const staff = await staff_members_models.findOne({ _id: staffId })
        console.log("The coordinator is" + staff)
        if (staff) {
            if (req.body.slotID == null) {
                res.send("You should enter the slot ID you wish to update")
            }
            else {

                const bodyinput = req.body.slotID
                console.log("bodyInput is" + bodyinput)
                const slotToUpdate = await slot_model.findOne({ numberID: bodyinput })

                if (slotToUpdate) {
                    console.log("Slot to update is" + slotToUpdate)
                    var flag = "false"
                    for (let index = 0; index < staff.coordinatorCourse.length; index++) {
                        if (staff.coordinatorCourse[index] == slotToUpdate.courseTaught) {
                            flag = "true"
                        }
                    }
                    if (flag == "false") {
                        res.send("You are not a coordinator on this course")
                    }
                    else {
                        if (req.body.location != null) {
                            const newLocation = req.body.location
                            const office = await location_model.findOne({ name: newLocation })
                            if (!office) {
                                return res.send("Invalid location")
                            }
                            slotToUpdate.location = newLocation
                            try {
                                slotToUpdate.save()
                            }
                            catch (Err) {
                                console.log(Err)
                                res.send("Mongoose problem while updating location")
                            }
                        }
                        if (req.body.type != null) {
                            const newType = req.body.type
                            if (newType != "lab" && newType != "tutorial" && newType != "lecture") {
                                return res.send("Invalid type;should be a lab,lecture or tutorial")
                            }
                            slotToUpdate.type = newType
                            try {
                                slotToUpdate.save()
                            }
                            catch (Err) {
                                console.log(Err)
                                res.send("Mongoose problem while updating type")
                            }
                        }
                        if (req.body.time != null) {
                            const newTime = req.body.time
                            slotToUpdate.time = newTime
                            try {
                                slotToUpdate.save()
                            }
                            catch (Err) {
                                console.log(Err)
                                res.send("Mongoose problem while updating time")
                            }
                        }
                        if (req.body.courseTaught != null) {

                            const newcourseTaught = req.body.courseTaught
                            slotToUpdate.courseTaught = newcourseTaught
                            try {
                                slotToUpdate.save()
                            }
                            catch (Err) {
                                console.log(Err)
                                res.send("Mongoose problem while updating course taught")
                            }
                        }
                        res.send("Successfully updated")
                    }
                }
            }
        }
    })
    
module.exports = router