const { mongo, Mongoose } = require("mongoose")
const taskData = require("../models/TaskData")
const TaskData = require("../models/TaskData")

const taskController = {

    newTask: (req, res) => {
        const { taskId, task } = req.body
        const newTask = new TaskData({ taskId, task })
        newTask.save()
            .then(response => res.json({ success: true, response }))
            .catch(error => res.json({ success: false, error }))
    },
    searchTask: (req, res) => {
        TaskData.find()
            .then(data => {
                return res.json({ success: true, respuesta: data })
            })
            .catch(error => {
                return res.json({ success: false, error: error })
            })
    },

    deleteTask: (req, res) => {
        const {id} = req.params
        taskData.deleteOne(
            {_id: id},
        ).then(data => {
            return res.json({ success: true, respuesta: data })
        })
        .catch(error => {
            return res.json({ success: false, error: error })
        })
    }
}

module.exports = taskController