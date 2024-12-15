const mongoose = require('mongoose');
const shortid = require('shortid')



const TaskSchema = new mongoose.Schema({
    _id: {type: String, default: shortid.generate},
    user_id: String,
    text: String,
    created_at: Date,
    status: String,
    update_at: Date,
})


const TaskModel = mongoose.model('task', TaskSchema);

module.exports = TaskModel;