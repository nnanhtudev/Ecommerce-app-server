// seeders/seedUsers.js
const User = require("../models/User");
const Role = require("../models/Role");

const seedUsers = async () => {
  try {
    const customerRole = await Role.findOne({ name: "Customer" });
    const advisorRole = await Role.findOne({ name: "Advisor" });
    const adminRole = await Role.findOne({ name: "Admin" });

    const customerUser = new User({
      username: "customer1",
      email: "customer1@example.com",
      password: "customer1@example.com",
      fullName: "Customer One",
      role: [customerRole._id],
    });
    await customerUser.save();

    const advisorUser = new User({
      username: "advisor1",
      email: "advisor1@example.com",
      password: "advisor1@example.com",
      fullName: "Advisor One",
      role: [advisorRole._id],
    });
    await advisorUser.save();

    const adminUser = new User({
      username: "admin1",
      email: "admin1@example.com",
      password: "admin1@example.com",
      fullName: "Admin One",
      role: [adminRole._id],
    });
    await adminUser.save();

    console.log("Users seeded successfully.");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

module.exports = seedUsers;
