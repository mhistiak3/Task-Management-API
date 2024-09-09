const mongoose = require("mongoose");
const Users = require("../model/UsersModel");
const { TokenEncode } = require("../utility/tokenUtility");
const SendEmail = require("../utility/emailUtility");

const Registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await Users.create(reqBody);
    return res.json({
      status: "success",
      Message: "User registered successfully",
    });
  } catch (error) {
    return res.json({ status: "fail", Message: error.toString() });
  }
};

const Login = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await Users.findOne(reqBody);

    if (data == null) {
      return res.json({ status: "fail", Message: "User not found" });
    } else {
      // Login Success
      let token = TokenEncode(data.email, data._id);
      return res.json({
        status: "success",
        Message: "User login successfully",
        data: { token: token },
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

const ProfileDetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];

    let data = await Users.findOne({ _id: user_id });
    return res.json({
      status: "success",
      message: "User profile successfully",
      data: data,
    });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

const ProfileUpdate = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];

    let reqBody = req.body;

    await Users.updateOne({ _id: user_id }, reqBody);
    return res.json({ status: "success", Message: "User Update successfully" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

const EmailVerify = async (req, res) => {
  try {
    let email = req.params.email;
    let data = await Users.findOne({ email: email });
    if (data == null) {
      return res.json({ status: "fail", Message: "User email does not exist" });
    } else {
      // Send OTP To Email
      let code = Math.floor(100000 + Math.random() * 900000);
      let EmailTo = data["email"];
      let EmailText = "Your Code is " + code;
      let EmailSubject = "Task Manager Verification Code";
     const a =  await SendEmail(EmailTo, EmailText, EmailSubject);
     console.log(a);
     

      // Update OTP In User
      await Users.updateOne({ email: email }, { otp: code });
      return res.json({
        status: "success",
        Message: "Verification successfully,check email",
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e });
  }
};

const CodeVerify = async (req, res) => {
     try {
       let reqBody = req.body;
       let data = await Users.findOne({
         email: reqBody["email"],
         otp: reqBody["otp"],
       });
       if (data == null) {
         return res.json({
           status: "fail",
           Message: "Wrong Verification Code",
         });
       } else {
         return res.json({
           status: "success",
           Message: "Verification successfully",
         });
       }
     } catch (e) {
       return res.json({ status: "fail", Message: e.toString() });
     }
};

const ResetPassword = async (req, res) => {
  
    try {
      let reqBody = req.body;
      let data = await Users.findOne({
        email: reqBody["email"],
        otp: reqBody["otp"],
      });
      if (data == null) {
        return res.json({ status: "fail", Message: "Wrong Verification Code" });
      } else {
        await Users.updateOne(
          { email: reqBody["email"] },
          {
            otp: "0",
            password: reqBody["password"],
          }
        );
        return res.json({
          status: "success",
          Message: "Password Reset successfully",
        });
      }
    } catch (e) {
      return res.json({ status: "fail", Message: e });
    }
};

module.exports = {
  Registration,
  Login,
  ProfileDetails,
  ProfileUpdate,
  EmailVerify,
  CodeVerify,
  ResetPassword,
};
