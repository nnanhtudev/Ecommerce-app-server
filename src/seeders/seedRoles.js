// seeders/seedRoles.js
const Role = require("../models/Role");

const seedRoles = async () => {
  try {
    const customerRole = new Role({
      name: "Customer",
      url: "/client",
      desc: "Role for customers who can access the client side",
    });
    await customerRole.save();

    const advisorRole = new Role({
      name: "Advisor",
      url: "/client",
      desc: "Role for advisors who can access the client side and limited admin functions",
    });
    await advisorRole.save();

    const adminRole = new Role({
      name: "Admin",
      url: "/admin",
      desc: "Role for admins who can access all functions on both client and admin sides",
    });
    await adminRole.save();

    console.log("Roles seeded successfully.");
  } catch (error) {
    console.error("Error seeding roles:", error);
  }
};

module.exports = seedRoles;
