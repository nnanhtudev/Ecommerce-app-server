// seeders/seedOrders.js
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

const seedOrders = async () => {
  try {
    const customerUser = await User.findOne({ username: "customer1" });
    const product1 = await Product.findOne({ name: "Product 1" });
    const product2 = await Product.findOne({ name: "Product 2" });

    const order1 = new Order({
      user: customerUser._id,
      products: [product1._id],
      totalAmount: 100,
      status: "Delivered",
    });
    await order1.save();

    const order2 = new Order({
      user: customerUser._id,
      products: [product2._id],
      totalAmount: 50,
      status: "Processing",
    });
    await order2.save();

    console.log("Orders seeded successfully.");
  } catch (error) {
    console.error("Error seeding orders:", error);
  }
};

module.exports = seedOrders;
