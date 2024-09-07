const express = require('express')
const router = express.Router();

const TaskController = require("../src/controllers/TaskController.js")
const UsersController = require("../src/controllers/UsersController.js")

// Users Routes
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.get("/ProfileDetails", UsersController.ProfileDetails);
router.post("/ProfileUpdate", UsersController.ProfileUpdate);
router.post("/EmailVerify", UsersController.EmailVerify);
router.post("/CodeVerify", UsersController.CodeVerify);
router.post("/ResetPassword", UsersController.ResetPassword);

// Task Routes
router.post("/CreateTask", TaskController.CreateTask);
router.get("/UpdateTaskStatus", TaskController.UpdateTaskStatus);
router.get("/TaskListByStatus", TaskController.TaskListByStatus);
router.get("/DeleteTask", TaskController.DeleteTask);
router.get("/CountTask", TaskController.CountTask);

module.exports = router;
