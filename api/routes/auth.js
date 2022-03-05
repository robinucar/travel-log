const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
    const {username, email, password} = req.body
    try {
        const newUser = new User({
            username,
            email,
            password
        });

        const user = await newUser.save()

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});



//LOGIN

module.exports = router;