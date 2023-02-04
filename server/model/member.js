const mongoose = require('mongoose');
const ProfileSchema = require('./profile');

const MemberSchema = new mongoose.Schema({
    ...ProfileSchema.obj,
    "team": {
        type: String,
    },
    "resume": {
        type: String,
    },
    "projects" :{
        type: [
            {
                "name": {
                    type: String,
                    required: true,
                    maxlength: 100
                },
                "description": {
                    type: String,
                    required: true,
                    maxlength: 500
                },
                "link": {
                    type: String,
                    maxlength: 100
                },
                "image": {
                    type: String,
                    maxlength: 100
                }
            }
        ]
    }
});

module.exports = mongoose.model('Member', MemberSchema);