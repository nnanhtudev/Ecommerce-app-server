import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI, { maxPoolSize: 10 })
      .then(() => console.log("MongoDB connected successfully.!"));
  } catch (error) {
    console.log("MongoDB connection error:' " + error);
  }
};

export default connectDB;
