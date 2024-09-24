const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Make sure to include the database name in the connection string
        await mongoose.connect('mongodb://localhost:27017/firstpr', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);  // Exit process with failure if connection fails
    }
}

module.exports = connectDB;
