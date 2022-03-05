const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post")
const bcrypt = require("bcryptjs");

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt();
      req.body.passowrd = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only UPDATE your account.");
  }
});

// DELETE USER
//delete user by id
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
        const user = await User.findById(req.params.id)
        try {
            //delete all user post 
            await Post.deleteMany({username: user.username})
            //delete user itself
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Users Deleted...");
          }catch (err) {
            res.status(500).json(err);
          }
    }catch(err) {
        res.status(401).json("User not found...")
    }
     
  } else {
    res.status(401).json("You can only DELETE your account.");
  }
});

module.exports = router;
