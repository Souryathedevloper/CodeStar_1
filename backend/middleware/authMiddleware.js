const jwt = require("jsonwebtoken");

const authMiddleware = (roles) => {
    return (req, res, next) => {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ error: "Unauthorized - No token provided" });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ error: "Access denied - Unauthorized role" });
            }

            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: "Invalid or expired token" });
        }
    };
};

module.exports = authMiddleware;
