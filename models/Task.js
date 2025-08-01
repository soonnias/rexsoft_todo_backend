import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

export const Task = mongoose.model("Task", taskSchema);