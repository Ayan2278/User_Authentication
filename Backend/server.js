const express = require("express");
const app = express();
const port = 3000;
const connectDB = require('./db/dbConnect');  // Import the database connection
const User = require('./db/user');  // Import the User model

// Connect to MongoDB
connectDB();

app.use(express.json());  // Middleware to parse JSON requests

// User registration route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;  // Destructure the request body
        console.log(req.body);  // Log request body for debugging
        const user = new User({ username, password });  // Create a new User instance
        await user.save();  // Save the user to the database
        res.status(201).json({ message: "Successfully submitted" });  // Send success response
    } catch (err) {
        console.error(err);  // Log any errors
        res.status(500).json({ error: 'Registration failed' });  // Send error response
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
