const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");

// UPDATE
router.put("/:id", async (req, res) => {
  const { userId, password } = req.body;
  const { id } = req.params;
  if (userId === id) {
    if (password) {
      const salt = await bcrypt.genSalt();
      req.body.password = await bcrypt.hash(password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
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
  const { userId } = req.body;
  const { id } = req.params;
    try {
      const user = await User.findById(id);
      try {
        //delete all user post
        await Post.deleteMany({ username: user.username });
        //delete user itself
        await User.findByIdAndDelete(id);
        res.status(200).json("Users Deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(401).json("User not found...");
    }
});

// GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //do not show password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
