const mongoose = require("mongoose");
const config = require("../config/index.js");

exports.connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
    throw error;
  }
};
