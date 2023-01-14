const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
router.post("/profile", (req, res) => {
    const user = {name, surname, subteam, dateJoined, blurb, linkedin, academicInfo, role, email} = req.body;
    if (!user) {
        res.status(400).json({"errorMsg": "User not found"})
    }
    res.send("Data has been posted")
})
module.exports = router;