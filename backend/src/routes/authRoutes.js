import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async(req, res) => {
    const { email, password, role } = req.body;
    await User.create({ email, password, role });
    res.json("Registered successfully");
});

// Login
router.post("/login", async(req, res) => {
    const user = await User.findOne(req.body);
    if (!user) return res.status(401).json("Invalid");

    const token = jwt.sign({ id: user._id, role: user.role },
        "secret"
    );

    res.json({ token, role: user.role });
});

export default router;