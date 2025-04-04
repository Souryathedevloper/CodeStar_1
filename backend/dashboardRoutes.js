const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/worker-dashboard", authMiddleware(["Worker"]), (req, res) => {
    res.json({ message: "Welcome to Worker Dashboard" });
});

router.get("/user-dashboard", authMiddleware(["User"]), (req, res) => {
    res.json({ message: "Welcome to User Dashboard" });
});

module.exports = router;
