const express = require("express");
const User = require("../models/User");
const router = express.Router();

// 📌 Get User Profile (Protected Route)
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found!" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error!", error });
    }
});

// 📌 Get All Workers (For Users)
router.get("/workers", async (req, res) => {
    try {
        const workers = await User.find({ role: "worker" }).select("-password");
        res.json(workers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch workers", error });
    }
});

module.exports = router;
