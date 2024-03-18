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
    email: {
    type: String,
    required: true
  },
    mobile: {
    type: Number,
    required: true
  },  
  password: {
    type: String,
    required: true
  }, 
  choice: {
    type: String,
    enum: ['male', 'female', 'preferNotToSay'], // Define the available options
    required: true
}
});

const collection = mongoose.model("login", newSchema);

module.exports = collection;
