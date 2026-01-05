import express from "express";
import multer from "multer";
import Video from "../models/Video.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => cb(null, Date.now() + file.originalname)
});

const upload = multer({ storage });

// Upload video
router.post("/upload", upload.single("video"), async(req, res) => {
    const video = new Video({ filename: req.file.filename });
    await video.save();

    // fake processing
    setTimeout(async() => {
        video.status = "safe";
        await video.save();
    }, 3000);

    res.json({ message: "Video uploaded", video });
});

// Get videos
router.get("/", async(req, res) => {
    const videos = await Video.find();
    res.json(videos);
});

export default router;