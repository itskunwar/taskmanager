const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
  try {
    const posts = await Task.find();
    const data = { status: 200, posts };
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
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      const error = new Error("No task found with the given id!");
      error.statusCode = 404;
      throw error;
    }
    const data = { status: 200, task };
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    // const task = await Task.findById(id);
    await Task.findByIdAndUpdate(id, { name });
    if (!task) {
      const error = new Error("No task found for the given id!");
      error.statusCode = 404;
      throw error;
    }
    const data = { status: 200, task };
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      const error = new Error("No task found with given id!");
      error.statusCode = 404;
      throw error;
    }
    await Task.findByIdAndRemove(id);
    res.json({ status: 200, message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
