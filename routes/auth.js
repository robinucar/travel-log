const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password, password2 } = req.body;
  //validations
  try {
    if (password === password2 && password.length > 5) {
      try {
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new User({
          username,
          email,
          password: hashedPass,
          password2: hashedPass
        });

        const user = await newUser.save();
        res.status(200).json(user);
        
      } catch (err) {
        res.status(500).json(err);
      }
    }else {
      throw new Error('Wrong password credentials!')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  //distract
  const { username } = req.body;

  try {
    //use email instead of username later
    const user = await User.findOne({ username });
    if(!user) {
      res.status(400).json("Wrong credentials!");
      return
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated) {
      res.status(400).json("Wrong credentials!");
      return
    }
    console.log(validated)
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log("here")
    console.log(err)
    res.status(500).json(err);
    
  }
});

module.exports = router;
