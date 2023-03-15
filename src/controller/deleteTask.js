const Task = require("../models/Task");
const getTasks = require("./getTasks");

const deleteTask = async (id) => {
  try {
    await Task.deleteOne({ _id: id });
    const tasks = await getTasks();
    return tasks;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = deleteTask;
