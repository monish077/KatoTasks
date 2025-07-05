import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// ✅ GET tasks for specific user
router.get('/', async (req, res) => {
  const { email } = req.query;
  try {
    const tasks = await Task.find({ userEmail: email });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST a new task with user's email
router.post('/', async (req, res) => {
  const { title, description, completed, dueDate, userEmail } = req.body;

  try {
    const task = new Task({
      title,
      description: description || '',
      completed: completed || false,
      dueDate,
      userEmail,
    });

    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ PUT - Edit task title by ID
router.put('/:id', async (req, res) => {
  const { title } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ DELETE task by ID
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
