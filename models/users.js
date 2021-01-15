const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = User = mongoose.model("User", userSchema);
