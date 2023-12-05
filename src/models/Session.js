const mongoose = require("mongoose");

const Sessions = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    messages: [
      {
        sender: { type: String, enum: ["User", "Admin"], required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    // Other session-related fields
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", Sessions);
