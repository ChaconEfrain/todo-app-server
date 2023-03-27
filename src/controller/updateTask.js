const Task = require("../models/Task");

const updateTask = async (id, task, completed = false) => {
  try {
    await Task.updateOne({ _id: id }, { task, completed });
    const updatedTask = await Task.findById(id);
    return updatedTask;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = updateTask;
