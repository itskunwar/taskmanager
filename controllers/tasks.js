const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
  try {
    const posts = await Task.find();
    const data = { status: 200, posts };
    const error = new Error("Data missing!");
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { name } = req.body;
    const task = new Task({ name });
    await task.save();
    const data = { status: 200, task: task._id };
    return res.json(data);
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    const data = { status: 200, task };
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("deleteTask");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
