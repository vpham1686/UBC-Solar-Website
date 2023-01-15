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
            required: true,
            maxlength: 20
        }
    },
    "bio": {
        type: String,
        required: true,
        maxlength: 500
    },
    "dateJoined": {
        type: Date,
        default: Date.now,
        required: true,
    },
    "role": {
        type: String,
        required: true,
        enum: ["admin", "general"]
    },
    "id": {
        type: Number,
        required: true,
    },
    "socialMedia": {
        "linkedIn": {
            type: String,
            required: true,
            maxlength: 100
        },
        "instagram": {
            type: String,
            required: true,
            maxlength: 100
        },
        "facebook": {
            type: String,
            required: true,
            maxlength: 100
        },
        "email": {
            type: String,
            required: true,
            maxlength: 100
        },
        "phoneNumber": {
            type: String,
            required: true,
            maxlength: 100
        }
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);