# 📋 KatoTasks - Todo Task Management Web App

This project is built for the **Katomaran Hackathon 2025** by [Katomaran](https://www.katomaran.com).

---

## 🚀 Overview

**KatoTasks** is a full-stack task management application that lets users sign in with Google and manage personal tasks in real-time. Designed with productivity and collaboration in mind, the app supports CRUD operations, real-time updates, and mobile responsiveness.

> ✨ Built using the MERN stack with real-time features and OAuth login.

---

## 🌟 Features

- 🔐 **Google OAuth 2.0** login
- ✅ Create, update, delete, and view tasks
- 👥 Share tasks with other users (coming soon)
- 🔄 Real-time updates using **Socket.IO**
- 🧮 Filter by priority, status, and due date (optional)
- 💡 Smart toast notifications
- 📱 Fully responsive UI
- 🌐 Deployed on Vercel (Frontend) and Fly.io (Backend)

---

## 🖼️ Screenshots

### Login Page  
![Login](https://raw.githubusercontent.com/monish077/KatoTasks/main/frontend/screenshots/login.png)

### Dashboard  
![Dashboard](https://raw.githubusercontent.com/monish077/KatoTasks/main/frontend/screenshots/Dashboard.png)

---

## 🛠 Tech Stack

| Layer      | Tech Stack                 |
|------------|----------------------------|
| Frontend   | React, Tailwind CSS        |
| Backend    | Node.js, Express.js        |
| Database   | MongoDB Atlas              |
| Auth       | Google OAuth 2.0, JWT      |
| Real-time  | Socket.IO (WebSockets)     |
| Deployment | Vercel (frontend), Fly.io (backend) |

---

## 📦 Local Setup

Clone the repository and run both backend and frontend:

```bash
# 1. Clone the repository
git clone https://github.com/monish077/KatoTasks.git
cd KatoTasks

# 2. Setup Backend
cd backend
npm install
npm run dev
# Make sure your `.env` has correct MongoDB URI

# 3. Setup Frontend
cd ../frontend
npm install
npm start
