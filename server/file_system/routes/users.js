const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Get requests


// get specific user from db
router.get("/search/:userID", async (req, res) => {
  //log the userID
  console.log(req.params.userID);
  try {
    const user = await User.findById(req.params.userID);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});

// get all users from db
router.get("/users", async (req, res) => {
  try {
    // load up all users from database
    const users = await User.find();
    res.json(users);
    console.log("Users successfully loaded to local storage.");
  } catch (err) {
    res.json({ message: err });
  }
});

//Post requests

// add new user to db
router.post("/", (req, res) => {
  //we need to access the post from the request body
  const user = new User({
    name: {
      firstname: req.body.name.firstname,
      surname: req.body.name.surname,
    },
    bio: req.body.bio,
    social_media: {
      linkedIn: req.body.social_media.linkedIn,
    },
  });

  //when user is saved to DB
  user
    .save()
    .then((data) => {
      //return status code and successful completion message
      res.status(200).json(data);
      console.log("Successfully added user!");
    })
    .catch((err) => {
      //print out the merror
      res.json({ message: err });
      console.log("error in adding user");
    });

  console.log(req.body);
});

//delete user
router.delete("/:userID", async (req, res) => {
  const removedUser = await User.remove({ _id: req.params.userID });
  res.json(removedUser);
});

//update a user
router.patch('/:userID', async (req,res)=>{
    User.updateOne({_id: req.params.postId })
})

module.exports = router;
