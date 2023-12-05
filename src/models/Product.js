const mongoose = require("mongoose");

const Products = new mongoose.Schema(
  {
    category: { type: String, required: true },
    photos: [{ type: String }],
    long_desc: { type: String, required: true },
    short_desc: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Products);
