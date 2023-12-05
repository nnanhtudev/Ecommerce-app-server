const mongoose = require("mongoose");

const Orders = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Processing", "Shipped", "Delivered"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", Orders);
