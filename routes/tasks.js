const express = require("express")
const task = require("../controllers/tasks")
const router = express.Router()

router.route("/").get(task.getAllTasks)


module.exports = router