// seeders/index.js
const mongoose = require("mongoose");
const seedRoles = require("./seedRoles");
const seedUsers = require("./seedUsers");
const seedProducts = require("./seedProducts");
const seedOrders = require("./seedOrders");
const seedSessions = require("./seedSessions");

mongoose.connect("mongodb://127.0.0.1:27017/db_Ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    await seedRoles();
    await seedUsers();
    await seedProducts();
    await seedOrders();
    await seedSessions();

    console.log("All seeders completed successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
