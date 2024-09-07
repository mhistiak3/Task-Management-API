const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Users = mongoose.model("users", UserSchema);

module.exports = Users;
