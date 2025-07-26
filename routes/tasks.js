import express from "express";
import { Task } from "../models/Task.js";

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Get task by ID
router.get("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

// Create task
router.post("/", async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
});

// Update task
router.put("/:id", async (req, res) => {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete task
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

export default router;
