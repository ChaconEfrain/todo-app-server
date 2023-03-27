const Task = require("../models/Task");

const createTask = async (task) => {
  if (!task) throw new Error("Task is required");
  const newTask = new Task({ task, completed: false });
  try {
    const createdTask = await newTask.save();
    return createdTask;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createTask;
