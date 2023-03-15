const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const createTask = require("./controller/createTask");
const deleteTask = require("./controller/deleteTask");
const getTasks = require("./controller/getTasks");
const updateTask = require("./controller/updateTask");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors("*"));

app.post("/task", async (req, res) => {
  const { task } = req.body;
  try {
    const createdTask = await createTask(task);
    res.json(createdTask);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/task", async (req, res) => {
  const { id } = req.query;
  try {
    const newTasks = await deleteTask(id);
    res.json(newTasks);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/task", async (req, res) => {
  const { id, task } = req.body;
  try {
    const updatedTask = await updateTask(id, task);
    res.json(updatedTask);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = app;
