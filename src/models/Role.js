const mongoose = require("mongoose");

const Roles = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", Roles);
