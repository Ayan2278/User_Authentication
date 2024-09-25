const express = require("express");
const app = express();
const port = 3000;
const connectDB = require('./db/dbConnect');  
const User = require('./db/user');  

connectDB();

app.use(express.json()); 

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;  
        console.log(req.body);  
        const user = new User({ username, password });
        await user.save();  
        res.status(201).json({ message: "Successfully submitted" });
    } catch (err) {
        console.error(err);  
        res.status(500).json({ error: 'Registration failed' });  
    }
});
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body; 
        const user = await User.findOne({ username });
        if (!user) {  
            return res.status(401).json({ error: 'Invalid credentials!' });
        }
        if(user.password !== password){
            return res.status(401).json({ error: 'Invalid credentials!' }); 
        }
        res.json({ message: 'Logged in successfully' }); 
    } catch (err) {
        console.error(err); 
        res.status(500).json({ error: 'Login failed' }); 
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
