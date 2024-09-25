const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB without the deprecated options
        await mongoose.connect('mongodb://localhost:27017/firstProject');
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);  // Exit process with failure if connection fails
    }
}

module.exports = connectDB;
