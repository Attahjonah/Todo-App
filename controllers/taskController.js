const TaskService = require('../services/taskService')

const CreateTask = async (req, res) => {
    const payload = req.body;
    const user = req.user;

    const serviceResponse = await TaskService.CreateTask({
        text: payload.text, 
        user,
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}

const GetTask = async (req, res) => {
   
    const taskId = req.params.taskId

    const serviceResponse = await TaskService.GetTask({
        taskId, 
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}
const GetAllTask = async (req, res) => {

    const { sort } = req.query;
    let filter = {}

    if (sort === "completed") {
        filter.status = "completed"
    } else if ( sort === "deleted") {
        filter.status = "deleted"
    } else if ( sort === "all") {
        filter = {}
    } else {
        filter.status = "pending"
    }

    const serviceResponse = await TaskService.GetAllTask(filter);

    return res.status(serviceResponse.code).json(serviceResponse);
}

const UpdateTask = async (req, res) => {
    const taskId = req.params.taskId
    const user = req.user;
    const { text, status } = req.body;

    const serviceResponse = await TaskService.UpdateTask({
        taskId,
        user,
        text,
        status
    })

    return res.status(serviceResponse.code).json(serviceResponse);
}
const DeleteTask = async (req, res) => {
    const taskId = req.params.taskId
    const user = req.user;

    const serviceResponse = await TaskService.DeleteTask({
        taskId,
        user,
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