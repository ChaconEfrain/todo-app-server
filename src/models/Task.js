const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  task: String,
  completed: Boolean,
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
