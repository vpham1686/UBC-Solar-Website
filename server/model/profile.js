const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    "name": {
        "first": {
            type: String,
            required: true,
            maxlength: 20
        },
        "last": {
            type: String,
            maxlength: 20
        }
    },
    "email": {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 100
    },
    "bio": {
        type: String,
        default: "",
        maxlength: 500
    },
    "dateJoined": {
        type: Date,
        default: Date.now,
        required: true,
    },
    "role": {
        type: String,
        default: "general",
        required: true,
    },
    "id": {
        type: Number,
    },
    "socialMedia": {
        "linkedIn": {
            type: String,
            maxlength: 100
        },
        "instagram": {
            type: String,
            maxlength: 100
        },
        "facebook": {
            type: String,
            maxlength: 100
        },
        "phoneNumber": {
            type: String,
            maxlength: 100
        }
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);