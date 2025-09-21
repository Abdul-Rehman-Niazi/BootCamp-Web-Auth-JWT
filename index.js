
//Task 1 – Password Hashing Authentication

const bcrypt = require("bcrypt");
const password = "mypass123";
const express = require('express');
const bodyparser = require("body-parser");


const app = express();
app.use(bodyparser.json());
//fake user database

const users = [];
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.push({ username, password: hashedPassword });
    res.json({ message: "user registered successfully" });
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = user.find((U) => U.username === username);
    if (!user) return res.status(404).json({
        message: "User not found"
    });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        res.json({ message: "Login successful" });
    } else {
        res.status(400).json({
            message: "Invalid Credentials"
        });

    };
});
app.listen(3000, () => {
    console.log('server is running on port 3000');
});
/*
bcrypt.hash(password, 10, (err, hash) => {
    console.log("password hashed:", hash);
    bcrypt.compare("mypass123", hash, (err, result) => {
        console.log(result);
    });
});
*/