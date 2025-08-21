# ⚡ CodeFlux – Real-time Collaborative Code Editor

🚀 **CodeFlux** is a real-time collaborative code editor where multiple users can join a room, see who’s connected, and work together instantly.  
Built with **React, Node.js, Express, and Socket.IO**, it ensures smooth and fast real-time collaboration.

👉 **Live Demo:** [CodeFlux](https://code-flux-frontend.vercel.app/)

---

## ✨ Features

- ✅ **Real-time Collaboration** – Multiple users can code together in sync  
- ✅ **Room System** – Create or join rooms with a unique Room ID  
- ✅ **User Presence** – See who’s connected via avatars  
- ✅ **Join/Leave Notifications** – Toast alerts when users enter/exit  
- ✅ **WebSocket Powered** – Fast communication using Socket.IO  
- ✅ **Deployment Ready** – Frontend on Vercel, backend on Render  

---

## 🚀 Tech Stack

**Frontend**
- React, React Router  
- React Hot Toast  
- Avatar Library  

**Backend**
- Node.js, Express  
- Socket.IO  

**Communication**
- WebSockets (via Socket.IO)  

**Deployment**
- Frontend → Vercel  
- Backend → Render  

---

## 📂 Project Structure
```bash
.
├── backend
│   ├── server.js        # Express + Socket.IO backend
│   └── Actions.js       # Socket.IO action constants
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Client.js      # Displays connected users with avatars
│   │   │   └── Editor.js      # Code editor component
│   │   ├── pages
│   │   │   └── EditorPage.js  # Main collaborative editor page
│   │   ├── socket.js          # Socket.IO client initialization
│   │   └── Actions.js         # Shared socket actions
│   └── public
│       └── codeflux.png       # Logo

yaml
Copy
Edit

---

🚀 Getting Started
1. Clone the repository

Clone the frontend repo:
👉 CodeFlux Frontend

git clone https://github.com/VarnitRaina/CodeFlux-Frontend.git
cd CodeFlux

2. Setup Backend

Navigate to backend folder

Run:

npm install
npm start


Backend will run at http://localhost:5000

3. Setup Frontend

Navigate to frontend folder

Run:

npm install
npm start


Frontend will run at http://localhost:3000

4. Environment Variables

Create a .env file in both frontend & backend directories with required variables (like API URLs, socket server path, etc.).

REACT_APP_BACKEND_URL=http://localhost:5000
⚠️ When deploying, replace this with your hosted backend URL.

🌍 Deployment
Frontend → Vercel

Backend → Render / Railway / Heroku / VPS

🤝 Contributing
Contributions are welcome! 🚀

Fork the repo

Create a new branch (feature-xyz)

Commit changes

Open a Pull Request

📜 License
This project is licensed under the MIT License.

🔥 If you like this project, don’t forget to star ⭐ the repo on GitHub!
