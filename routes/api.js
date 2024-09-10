const express = require('express')
const router = express.Router();

const TaskController = require("../src/controllers/TaskController.js")
const UsersController = require("../src/controllers/UsersController.js");
const AuthMiddleware = require('../src/middlewares/AuthMiddleware.js');

// Users Routes
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.get("/ProfileDetails",AuthMiddleware, UsersController.ProfileDetails);
router.post("/ProfileUpdate",AuthMiddleware, UsersController.ProfileUpdate);
router.get("/EmailVerify/:email", UsersController.EmailVerify);
router.post("/CodeVerify", UsersController.CodeVerify);
router.post("/ResetPassword", UsersController.ResetPassword);

// Task Routes
router.post("/CreateTask",AuthMiddleware, TaskController.CreateTask);
router.put("/UpdateTaskStatus/:id/:status",AuthMiddleware, TaskController.UpdateTaskStatus);
router.get("/TaskListByStatus/:status",AuthMiddleware, TaskController.TaskListByStatus);
router.delete("/DeleteTask/:id",AuthMiddleware, TaskController.DeleteTask);
router.get("/CountTask", AuthMiddleware,TaskController.CountTask);

module.exports = router;
