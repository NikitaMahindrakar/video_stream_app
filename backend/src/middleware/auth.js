import jwt from "jsonwebtoken";

export const auth = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json("No token");

        const user = jwt.verify(token, "secret");
        if (roles.length && !roles.includes(user.role))
            return res.status(403).json("Access denied");

        req.user = user;
        next();
    };
};