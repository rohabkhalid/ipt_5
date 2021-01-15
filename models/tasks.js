const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const taskSchema = new Schema({
  email: {type:String, required:true},
  task: {type:String, required:true},
  isCompleted: {type:Boolean, default:0},
});

module.exports = Task = mongoose.model("Task", taskSchema);
