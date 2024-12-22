const Router = require('express').Router
const TaskController = require('../controllers/taskController')
const AuthMiddleware = require('../authmiddleware')
//const { Router } = require('express')

const route = Router()
route.post('/', AuthMiddleware.ValidateToken, TaskController.CreateTask)
route.get('/:taskId', AuthMiddleware.ValidateToken, TaskController.GetTask)
route.get('/', AuthMiddleware.ValidateToken, TaskController.GetAllTask)
route.put('/:taskId', AuthMiddleware.ValidateToken, TaskController.UpdateTask)
route.delete('/:taskId', AuthMiddleware.ValidateToken, TaskController.DeleteTask)

module.exports = route