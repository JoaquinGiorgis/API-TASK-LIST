const express = require('express')
const taskController = require('../controllers/taskController')
const router = express.Router()

router.route('/task')
    .post(taskController.newTask)

router.route('/tasks')
    .get(taskController.searchTask)
    

router.route('/deletetask/:id')
    .delete(taskController.deleteTask)

module.exports = router