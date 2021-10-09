const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3,
  },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  keywords: [
    {
      type: String,
      unique: false,
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
