const mongoose = require('mongoose');
const ProfileSchema = require('./profile');

const SponsorSchema = new mongoose.Schema({
    ...ProfileSchema.obj,
    "sponsorLevel": {
        type: String,
        enum: ['Platinum', 'Gold', 'Silver', 'Bronze', 'Diamond'],
        required: true,
        maxlength: 20
    }
});

module.exports = mongoose.model('Sponsor', SponsorSchema);