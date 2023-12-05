const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", Users);
