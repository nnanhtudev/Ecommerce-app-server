const mongoose = require("mongoose");

const Orders = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullName: { type: "string" },
    email: { type: "string" },
    phone: { type: "string" },
    address: { type: "string" },
    timeOder: { type: Date, default: Date.now },
    total: { type: Number },
    carts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true }],
    status: { type: String, enum: ["Pending", "Processing", "Shipped", "Delivered"], default: "Pending" },
    delivery: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", Orders);
