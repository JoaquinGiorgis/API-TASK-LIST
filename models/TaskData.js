const mongoose = require('mongoose')

const taskDataSchema = new mongoose.Schema({
    taskId: { type: mongoose.Schema.ObjectId, ref: 'task'},
    task: { type: String },
})

const taskData = mongoose.model('taskData', taskDataSchema)

module.exports = taskData