const mongoose = require('mongoose');
const Tasks = require("../model/TasksModel");
const CreateTask = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let requestBody = req.body;
    requestBody.user_id = user_id;

    await Tasks.create(requestBody);
    return res.json({ status: "success", message: "Task successfully" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

const UpdateTaskStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let status = req.params.status;
    let user_id = req.headers["user_id"];
    await Tasks.updateOne(
      { _id: id, user_id: user_id },
      {
        status: status,
      }
    );
    return res.json({ status: "success", message: "Task Update successfully" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

const TaskListByStatus = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let status = req.params.status;

    let data = await Tasks.find({ user_id: user_id, status: status });

    return res.json({ status: "success", message: "Task List", data: data });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

const DeleteTask = async (req, res) => {
  try {
    let id = req.params.id;
    let user_id = req.headers["user_id"];
    await Tasks.deleteOne({ _id: id, user_id: user_id });
    return res.json({ status: "success", message: "Task deleted" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

const CountTask = async (req, res) => {
  try {
    let ObjectId = mongoose.Types.ObjectId;
    let user_id = new ObjectId(req.headers["user_id"]);
    let data = await Tasks.aggregate([
      { $match: { user_id: user_id } },
      { $group: { _id: "$status", sum: { $count: {} } } },
    ]);
    return res.json({
      status: "success",
      message: "Count successfully",
      data: data,
    });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

module.exports = {
  CreateTask,
  UpdateTaskStatus,
  TaskListByStatus,
  DeleteTask,
  CountTask,
};
