const TaskModel = require('../models/taskModel')

const CreateTask = async ({ text, user }) => {
    const task = await TaskModel.create({
        text,
        user_id: user._id,
        created_at: new Date(),
        status: "pending"
    })

    return {
        code: 201,
        success: true,
        status: "pending",
        message: 'Task created successfully',
        data: {
            task,
        }
    }
}
const GetTask = async ({ taskId }) => {
    const task = await TaskModel.findOne({ _id: taskId });

    if (!task) {
        return {
            code: 404,
            success: false,
            message: 'Task not found',
            data: null,
        }
    }

    return {
        code: 200,
        success: true,
        message: 'Task found',
        data: {
            task
        },
    }

}
const GetAllTask = async () => {
    const tasks = await TaskModel.find();

    return {
        code: 200,
        success: true,
        message: 'Tasks found',
        data: {
            tasks
        },
    }
}


const UpdateTask = async ({ taskId, text, status}) => {
    const task = await TaskModel.findOne({ _id: taskId });

    if (!task) {
        return {
            code: 404,
            success: false,
            message: 'Task not found',
            data: null,
        }
    }


    task.text = text || task.text
    task.update_at = new Date()
    task.status = status

    await task.save()

    return {
        code: 200,
        success: true,
        status: "completed",
        message: 'Task completed successfully',
        data: {
            task
        },
    }
}
const DeleteTask = async ({ user, taskId }) => {
    const task = await TaskModel.findOne({ _id: taskId, user_id: user._id });

    if (!task) {
        return {
            code: 404,
            success: false,
            message: 'Task not found',
            data: null,
        }
    }

    await task.deleteOne({
        _id: taskId, user_id: user._id
    })

    return {
        code: 200,
        success: true,
        status: "Deleted",
        message: 'Task deleted successfully',
        data: null,
    }
}


module.exports = {
    CreateTask,
    GetAllTask,
    GetTask,
    UpdateTask,
    DeleteTask
}