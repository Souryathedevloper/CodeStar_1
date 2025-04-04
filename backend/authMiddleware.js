const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

module.exports = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers["authorization"];
        if (!token) return res.status(401).json({ message: "Access denied!" });

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            if (!roles.includes(decoded.role)) return res.status(403).json({ message: "Unauthorized access!" });

            req.user = decoded;
            next();
        } catch (err) {
            res.status(400).json({ message: "Invalid token!" });
        }
    };
};
