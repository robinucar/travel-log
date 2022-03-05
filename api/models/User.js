// require mongoose
const mongoose = require("mongoose");

// user schema

const userSchema = new mongoose.Schema(
  {
      // first name and last name
    username: {
      type: String,
      required: true,
      unique: true,
      // min and max length
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //valid email format
    },

    password: {
      type: String,
      required: true,
      //min length
    },

    // password confirmation

    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
