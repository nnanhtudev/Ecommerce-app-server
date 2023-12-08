const mongoose = require("mongoose");

const Carts = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    count: { type: Number },
    order: { type: Boolean, default: false },
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Carts);
