const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const otpService = require("../services/otpService"); // OTP Service
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// **Register User (Worker/User)**
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, mobile, password, role } = req.body;

        if (!firstName || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists!" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ firstName, lastName, email, mobile, password: hashedPassword, role });
        await user.save();

        res.status(201).json({ message: "Registration successful!" });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// **Login User**
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

        res.json({ message: "Login successful!", token, role: user.role });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// **OTP Login**
router.post("/login-otp", async (req, res) => {
    try {
        const { mobile } = req.body;
        const user = await User.findOne({ mobile });

        if (!user) return res.status(400).json({ message: "User not found!" });

        const otp = otpService.generateOTP(mobile);
        res.json({ message: "OTP sent successfully!", otp });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
