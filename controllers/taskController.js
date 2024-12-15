const TaskService = require('../services/taskService')

const CreateTask = async (req, res) => {
    const payload = req.body;
    const user = req.user;

    const serviceResponse = await TaskService.CreateTask({
        text: payload.text, 
        user
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}

const GetTask = async (req, res) => {
   
    const taskId = req.params.taskId

    const serviceResponse = await TaskService.GetTask({
        taskId 
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}
const GetAllTask = async (req, res) => {

    const serviceResponse = await TaskService.GetAllTask();

    return res.status(serviceResponse.code).json(serviceResponse);
}

const UpdateTask = async (req, res) => {
    const taskId = req.params.taskId
    const user = req.user;
    const text = req.body.text;

    const serviceResponse = await TaskService.UpdateTask({
        taskId,
        user,
        text,
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}
const DeleteTask = async (req, res) => {
    const taskId = req.params.taskId
    const user = req.user;

    const serviceResponse = await TaskService.DeleteTask({
        taskId,
        user
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}

module.exports = {
    GetAllTask,
    GetTask,
    DeleteTask,
    CreateTask,
    UpdateTask,
}