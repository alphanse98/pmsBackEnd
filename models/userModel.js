const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
      name: String,
      mobile: String,
      email: String,
      status: String,
      Description: String,
      date: Date,
    },
    { versionKey: false }
  );

  const User = mongoose.model("User", userSchema);

  module.exports = User;