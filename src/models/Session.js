const mongoose = require("mongoose");

const Sessions = new mongoose.Schema(
  {
    messages: [
      {
        content: { type: String },
        is_admin: { type: Boolean },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", Sessions);
