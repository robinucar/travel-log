const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');

//REGISTER
router.post("/register", async (req, res) => {
    
    const {username, email, password} = req.body

    try {

        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    }   catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

module.exports = router;