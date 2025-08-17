import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
function App() {
   useEffect(() => {
    const pingServer = () => {
      fetch('https://codeflux-backend-0vsv.onrender.com').catch(error => {
        console.error("Keep-alive ping failed:", error);
      });
    };

    // Ping the server every 10 minutes (600,000 milliseconds)
    const intervalId = setInterval(pingServer, 600000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div>
        <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: '#1c1c1c', 
      color: 'white',       
    },
    success: {
      iconTheme: {
        primary: 'green',
        secondary: '#1c1c1c', 
      },
    },
    error: {
      iconTheme: {
        primary: '#ff4c4c',
        secondary: '#1c1c1c',
      },
    },
  }}>
  </Toaster>

      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
