const Task = require("../models/Task");

const getTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getTasks;
