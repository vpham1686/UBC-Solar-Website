const mongoose = require("mongoose");

//create a schema to create profile model

const UserSchema = mongoose.Schema({
  name: {
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
  },
  bio: { type: String },
  date_joined: {
    type: Date,
    default: Date.now,
  },
  social_media: {
    linkedIn: { type: String },
    instagram: { type: String },
    facebook: { type: String },
    email: { type: String },
    phone_number: { type: String },
  },
  role: { type: String },
});

module.exports = mongoose.model('User', UserSchema);

// {"name":{"firstname": "Maka", "surname": "Chikumbu"},
// "bio": "I am HIM",
// "social_media": {
//     "linkedIn": "www.maka.com"
// }
// }