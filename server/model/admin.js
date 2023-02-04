const mongoose = require('mongoose');
const MemberSchema = require('./profile');

const AdminSchema = new mongoose.Schema({
    ...MemberSchema.obj,
    "adminRole": {
        type: String,
        required: true,
        maxlength: 20
    }
});

module.exports = mongoose.model('Admin', AdminSchema);