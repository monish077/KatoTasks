# KatoTasks - Todo Task Management Web App

This project is a part of a hackathon run by [https://www.katomaran.com](https://www.katomaran.com)

## 🚀 Overview

**KatoTasks** is a full-stack Todo Task Management Web App that enables users to sign in with Google and manage personal and shared tasks in real-time.

Built as part of the Katomaran Hackathon 2025, this app showcases complete engineering skills — from authentication, backend APIs, and real-time updates to responsive frontend UI and deployment.

---

## 🌟 Features

- ✅ Google OAuth login
- 📝 Create, update, delete, and view personal tasks
- 👥 Share tasks with other registered users
- 🔄 Real-time task updates using Socket.IO
- 🧮 Filter by priority, status, and due date
- 📱 Responsive UI for desktop & mobile
- 🔔 Toast notifications for user actions
- 🔌 Offline fallback & error boundaries

---

## 🛠 Tech Stack

| Layer      | Tech                      |
|------------|---------------------------|
| Frontend   | React, Tailwind CSS       |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB Atlas             |
| Auth       | Google OAuth 2.0 + JWT    |
| Real-time  | Socket.IO                 |
| Deployment | Vercel (frontend), Railway (backend) |

---

## 📦 How to Run Locally

```bash
# Clone the project
git clone https://github.com/monish077/KatoTasks.git
cd KatoTasks

# Setup Backend
cd backend/backend
npm install
npm run dev

# Setup Frontend
cd ../../frontend
npm install
npm start
