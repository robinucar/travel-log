// require mongoose
const mongoose = require("mongoose");

// user schema

const UserSchema = new mongoose.Schema(
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
   
    },
    password2: {
      type: String,
      required: true,
     
    },

    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
