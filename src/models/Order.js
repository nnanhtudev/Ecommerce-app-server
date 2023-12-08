const mongoose = require("mongoose");

const Orders = new mongoose.Schema(
  {
    fullName: { type: "string" },
    email: { type: "string" },
    phone: { type: "string" },
    address: { type: "string" },
    timeOder: { type: Date, default: Date.now },
    carts: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
    status: { type: String, enum: ["Pending", "Processing", "Shipped", "Delivered"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", Orders);
