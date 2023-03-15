const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  task: String,
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
