# 📋 KatoTasks - Todo Task Management Web App

This project is built for the **Katomaran Hackathon 2025** by [Katomaran](https://www.katomaran.com).

---

## 🚀 Overview

**KatoTasks** is a full-stack task management application that allows users to log in via Google and manage personal tasks. It supports full CRUD operations, task filtering, and live updates. The goal is to help individuals track their productivity with a simple, responsive, and efficient tool.

> ✨ Built using the MERN stack with Google OAuth, real-time updates, and cloud deployment.

---

## 🌟 Features

- 🔐 Google OAuth 2.0 authentication
- ✅ Create, update, delete, and view tasks
- 🔄 Real-time updates via polling
- 🧮 Filter tasks by priority, status, or due date
- 📅 Task due date support
- 📤 Share tasks with other users (feature coming soon)
- 📱 Responsive UI for mobile and desktop
- 💬 Toast notifications for actions
- 🌐 Deployed on Vercel (frontend) and Fly.io (backend)

---

## 🖼️ Screenshots

### 🔐 Login Page  
![Login](https://raw.githubusercontent.com/monish077/KatoTasks/main/frontend/screenshots/login.png)

### 🏠 Dashboard  
![Dashboard](https://raw.githubusercontent.com/monish077/KatoTasks/main/frontend/screenshots/Dashboard.png)

---

## 🛠 Tech Stack

| Layer      | Technologies Used              |
|------------|-------------------------------|
| Frontend   | React.js, Tailwind CSS        |
| Backend    | Node.js, Express.js           |
| Database   | MongoDB Atlas                 |
| Auth       | Firebase Google OAuth, JWT    |
| Real-time  | Polling (WebSocket optional)  |
| Deployment | Vercel (Frontend), Fly.io (Backend) |

---

## 🧠 Architecture Diagram

                            ┌────────────────────────────┐
                            │        Client (React)      │
                            │                            │
                            │ - React + Tailwind UI      │
                            │ - Google OAuth Login       │
                            │ - Task CRUD Forms          │
                            │ - Filters (status/date)    │
                            │ - Toasts & Polling         │
                            │                            │
                            └─────────────┬──────────────┘
                                          │
                        HTTP Requests (REST API) / JWT Auth
                                          │
                            ┌─────────────▼──────────────┐
                            │       Backend (Node.js)     │
                            │         with Express        │
                            │                             │
                            │ - API Routes (Tasks/Auth)   │
                            │ - Firebase Google Auth      │
                            │ - JWT Token Generation      │
                            │ - CRUD with Validation      │
                            │ - Polling for updates       │
                            │                             │
                            └─────────────┬──────────────┘
                                          │
                             MongoDB Driver / Mongoose
                                          │
                            ┌─────────────▼──────────────┐
                            │    MongoDB Atlas (Cloud)    │
                            │                             │
                            │ - users collection          │
                            │ - tasks collection          │
                            │   ↳ each task linked        │
                            │     to a user by email      │
                            │                             │
                            └─────────────────────────────┘


---

## 📂 Folder Structure

KatoTasks/
├── backend/ → Node.js + Express backend
│ └── routes/, controllers/, models/, .env
├── frontend/ → React + Tailwind frontend
│ └── pages/, components/, styles/
├── architecture/ → Architecture diagram (diagram.png)
├── README.md


---

## 🧩 Assumptions

- Each user only sees their own tasks.
- Shared task collaboration will be added in a future release.
- Real-time updates are currently handled using polling, but WebSocket support can be added later.

---

## 🎥 Demo Video

📽️ [Click here to watch the demo](https://www.loom.com/share/002a2af8523c4c13aef1bc089059f309?sid=de89ba8c-3c59-4720-abe1-f288d42b5355)

---

## 🌐 Live Demo

- 🔗 Frontend: [https://katotasks.vercel.app](https://katotasks.vercel.app)
- 🔧 Backend API: [https://katotasks-backend.fly.dev](https://katotasks-backend.fly.dev)

---

## 🧪 Local Development Setup

1. **Clone the Repository**
```bash
git clone https://github.com/monish077/KatoTasks.git
cd KatoTasks


cd backend
npm install

# Create a .env file with:
# MONGODB_URI=<your-mongodb-uri>
# JWT_SECRET=<your-jwt-secret>

npm run dev

cd ../frontend
npm install
npm start

