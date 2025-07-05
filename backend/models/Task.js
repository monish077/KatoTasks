import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: String,
    completed: { type: Boolean, default: false },
    dueDate: Date,
    userEmail: { type: String, required: true }, // ✅ added field
  },
  { timestamps: true }
);


const Task = mongoose.model('Task', taskSchema);

export default Task;
