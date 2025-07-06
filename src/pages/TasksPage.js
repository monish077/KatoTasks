import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import '../styles/TasksPage.css';

const API_BASE_URL = 'https://katotasks-backend.fly.dev/api/tasks';

const TasksPage = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');

  const fetchTasks = async () => {
    if (!user?.email) return;
    try {
      const response = await axios.get(API_BASE_URL, {
        params: { email: user.email },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('❌ Error fetching tasks:', error.message);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const response = await axios.post(API_BASE_URL, {
        title: newTask,
        description: '',
        completed: false,
        userEmail: user.email,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('❌ Error adding task:', error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('❌ Error deleting task:', error.message);
    }
  };

  const startEdit = (task) => {
    setEditTaskId(task._id);
    setEditTaskTitle(task.title);
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTaskTitle('');
  };

  const saveEdit = async (id) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, {
        title: editTaskTitle,
      });
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      cancelEdit();
    } catch (error) {
      console.error('❌ Error updating task:', error.message);
    }
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    setUser(decoded);
    localStorage.setItem('user', JSON.stringify(decoded));
    window.location.reload(); // Optional: refresh to re-fetch tasks
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setTasks([]);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    if (user) fetchTasks();
  }, [user]);

  if (!user) {
    return (
      <div className="login-container">
        <h2>Welcome to KatoTasks</h2>
        <p>Login to view your tasks</p>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => alert('❌ Login failed')}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>KatoTasks</h1>
      <p className="welcome">👋 Hello, {user.name}</p>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className="task">
            {editTaskId === task._id ? (
              <>
                <input
                  value={editTaskTitle}
                  onChange={(e) => setEditTaskTitle(e.target.value)}
                />
                <div className="actions">
                  <button onClick={() => saveEdit(task._id)}>✅</button>
                  <button onClick={cancelEdit}>❌</button>
                </div>
              </>
            ) : (
              <>
                <span className="text">{task.title}</span>
                <div className="actions">
                  <button onClick={() => startEdit(task)}>Edit</button>
                  <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default TasksPage;
