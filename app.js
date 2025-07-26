import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import tasksRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection error:", err));
