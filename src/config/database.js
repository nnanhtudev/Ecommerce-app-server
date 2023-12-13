import "dotenv/config";
import mongoose from "mongoose";
import config from "./index";
const connectDB = async () => {
  console.log(config.MONGODB_URI);
  try {
    await mongoose
      .connect(config.MONGODB_URI, { maxPoolSize: 20 })
      .then(() => console.log("MongoDB connected successfully.!"));
  } catch (error) {
    console.log("MongoDB connection error:' " + error);
  }
};

export default connectDB;
