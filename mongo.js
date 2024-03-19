const mongoose = require("mongoose");
require('dotenv').config(); // To load environment variables

const MONGODB_URI = process.env.MONGODB_URI; // As you stored your MongoDB URI in an environment variable

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const newSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Mobile: {
    type: Number,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("logins", newSchema);

module.exports = collection;
