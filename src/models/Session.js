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
    // Trường timestamp
    expireAt: {
      type: Date,
      expires: 1000 * 60 * 60 * 24,
    },
  },
  { timestamps: true }
);

Sessions.index({ expireAt: 1 }, { expireAfterSeconds: 0 }); // Kích hoạt tính năng tự động xóa

module.exports = mongoose.model("Session", Sessions);
