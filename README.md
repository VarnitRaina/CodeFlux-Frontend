⚡ CodeFlux – Real-time Collaborative Code Editor

CodeFlux is a real-time collaborative code editor where multiple users can join a room, see who’s connected, and work together instantly. Built using React, Node.js, Express, and Socket.IO, it’s designed for smooth real-time collaboration.

✨ Features

✅ Real-time Collaboration – Multiple users can code together in sync.
✅ Room System – Create or join rooms with a unique Room ID.
✅ User Presence – See who is connected via avatars.
✅ Join/Leave Notifications – Toast alerts notify when users enter or exit.
✅ WebSocket Powered – Built with Socket.IO for fast bidirectional communication.
✅ Deployment Ready – Frontend on Vercel, backend can be hosted on Render / Railway / Heroku / VPS.

🚀 Tech Stack

Frontend: React, React Router, React Hot Toast, Avatar library

Backend: Node.js, Express, Socket.IO

Communication: WebSockets (via Socket.IO)

Deployment:

Frontend → Vercel

Backend → (Deploy on Render/Heroku/Railway/Any VPS)

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
git clone https://github.com/your-username/codeflux.git
cd codeflux

2️⃣ Setup Backend
cd backend
npm install
npm start


By default, backend runs at http://localhost:5000.

3️⃣ Setup Frontend
cd frontend
npm install
npm start


Runs on http://localhost:3000.

🔌 Environment Variables

Create a .env file in the frontend directory:

REACT_APP_BACKEND_URL=http://localhost:5000


When deploying, replace this with your hosted backend URL.

🌍 Deployment

Frontend → Vercel

Backend → Render


🤝 Contributing

Contributions are welcome!

Fork the repo

Create a feature branch (feature-xyz)

Commit changes

Open a Pull Request

📜 License

This project is licensed under the MIT License.

👉 Live Demo: https://code-flux-frontend.vercel.app/
