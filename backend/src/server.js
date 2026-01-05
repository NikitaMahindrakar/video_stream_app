import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


mongoose.connect("mongodb+srv://root:pass@cluster0.rm9fvca.mongodb.net/video_streaming");

app.use("/auth", authRoutes);
app.use("/api/videos", videoRoutes);

app.listen(5000, () => console.log("Server running"));