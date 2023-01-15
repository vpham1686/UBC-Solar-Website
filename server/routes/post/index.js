const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const profile = require('../../model/profile');
const asyncWrapper = require('../../common/asyncWrapper');

router.post("/profile", asyncWrapper(async (req, res) => {
    const user = { name, email, bio, dateJoined, linkedin, role, socialMedia } = req.body;
    if (!user) {
        res.status(400).json({ "errorMsg": "User not found" });
    }
    await profile.create(user).catch(err => {
        res.status(400).json({ "errorMsg": err });
    })
    res.send("Data has been posted");
}));

module.exports = router;