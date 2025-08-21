⚡ CodeFlux – Real-time Collaborative Code Editor










🚀 CodeFlux is a real-time collaborative code editor where multiple users can join a room, see who’s connected, and work together instantly. Built with React, Node.js, Express, and Socket.IO, it ensures smooth and fast real-time collaboration.

👉 Live Demo: https://code-flux-frontend.vercel.app/

✨ Features

✅ Real-time Collaboration – Multiple users can code together in sync

✅ Room System – Create or join rooms with a unique Room ID

✅ User Presence – See who’s connected via avatars

✅ Join/Leave Notifications – Toast alerts when users enter/exit

✅ WebSocket Powered – Fast communication using Socket.IO

✅ Deployment Ready – Frontend on Vercel, backend deployable on Render / Railway / VPS

🚀 Tech Stack

Frontend

React, React Router

React Hot Toast

Avatar Library

Backend

Node.js, Express

Socket.IO

Communication

WebSockets (via Socket.IO)

Deployment

Frontend → Vercel

Backend → Render / Railway / VPS

📂 Project Structure
.
├── backend
│   ├── server.js        # Express + Socket.IO backend
│   └── Actions.js       # Socket.IO action constants
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Client.js   # Displays connected users with avatars
│   │   │   └── Editor.js   # Code editor component
│   │   ├── pages
│   │   │   └── EditorPage.js  # Main collaborative editor page
│   │   ├── socket.js     # Socket.IO client initialization
│   │   └── Actions.js    # Shared socket actions
│   └── public
│       └── codeflux.png  # Logo

⚡ Getting Started
1️⃣ Clone the repository
git clone https://github.com/VarnitRaina/CodeFlux-Frontend.git
cd codeflux

2️⃣ Setup Backend
cd backend
npm install
npm start


Backend runs at: http://localhost:5000

3️⃣ Setup Frontend
cd frontend
npm install
npm start


Frontend runs at: http://localhost:3000

🔌 Environment Variables

Create a .env file in the frontend directory:

REACT_APP_BACKEND_URL=http://localhost:5000


⚠️ When deploying, replace this with your hosted backend URL.

🌍 Deployment

Frontend → Vercel

Backend → Render / Railway / Heroku / VPS

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch (feature-xyz)

Commit changes

Open a Pull Request

📜 License

This project is licensed under the MIT License.

🔥 If you like this project, don’t forget to star ⭐ the repo on GitHub!
