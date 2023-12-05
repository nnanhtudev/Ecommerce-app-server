// seeders/seedSessions.js
const Session = require("../models/Session");
const User = require("../models/User");

const seedSessions = async () => {
  try {
    const customerUser = await User.findOne({ username: "customer1" });
    const advisorUser = await User.findOne({ username: "advisor1" });

    const session1 = new Session({
      user: customerUser._id,
      messages: [
        { sender: "User", content: "Hello", timestamp: new Date() },
        { sender: "Advisor", content: "Hi there!", timestamp: new Date() },
      ],
    });
    await session1.save();

    const session2 = new Session({
      user: advisorUser._id,
      messages: [
        { sender: "Advisor", content: "Welcome!", timestamp: new Date() },
        { sender: "User", content: "Thank you!", timestamp: new Date() },
      ],
    });
    await session2.save();

    console.log("Sessions seeded successfully.");
  } catch (error) {
    console.error("Error seeding sessions:", error);
  }
};

module.exports = seedSessions;
