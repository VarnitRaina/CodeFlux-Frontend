import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
function App() {
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
