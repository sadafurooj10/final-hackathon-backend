const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String,
    }
  ],
  github: String
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
