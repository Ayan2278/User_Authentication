const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true  // Ensure that each username is unique
    },
    password: {
        type: String,
        required: true  // Password is required
    }
});

// Create the User model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
