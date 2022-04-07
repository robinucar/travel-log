// require mongoose
const mongoose = require("mongoose");

// Post schema

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    desc: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    username: {
      type: String,
      required: true,
    },
    
    aboutMe: {
      type: String,
      required: false,
    },

    profilePic: {
      type: String,
      required: false,
    },

    categories: {
      type: Array,
      required: false,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
