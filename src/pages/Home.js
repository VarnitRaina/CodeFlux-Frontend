import {React,useState} from 'react';
import '../App.css'; 
import { v4 as uuidV4} from 'uuid'; 
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();


  const [roomId,setRoomId]=useState("");
  const [username,setUsername]=useState("");
  const rainElements = Array.from({ length: 100 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 10}s`,
      }}
    >
      {'</>'}
    </span>
  ));
  const createNewRoom=(e)=>{
    e.preventDefault();
    const id=uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  }
  const joinRoom=(e)=>{
    e.preventDefault();
    if(!roomId || !username){
      toast.error("Room ID and Username are required");
      return;
    }
    //Redirect
    navigate(`/editor/${roomId}`,{
      state:{
        username:username,
        roomId:roomId
      }
    })
  }
  const handleSubmit=(e)=>{
    if(e.key==="Enter"){
      joinRoom(e);
    }
  }
  return (
    <div className="homePageWrapper">
      {/* Animated coding background */}
      <div className="code-rain">{rainElements}</div>

      <div className="formWrapper">
        <div className="logoRow">
          <img className="logoHomePage" src="/codeflux.png" alt="Code Flux Logo" />
          <img
            className="gif"
            src="https://cdn.pixabay.com/animation/2025/07/15/15/23/15-23-45-967_512.gif" 
            alt="Coder Animation"
          />
        </div>
        <h4 className="mainLabel">Paste Invitation Room ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="Room ID" onChange={(e)=> setRoomId(e.target.value)} value={roomId} onKeyUp={handleSubmit} />
          <input type="text" className="inputBox" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} value={username} onKeyUp={handleSubmit} />
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then create <a onClick={createNewRoom} href="" className="createNewBtn">⚒️New Room </a>
          </span>
        </div>
      </div>

      <footer className="footer">
        <h4>
          Built by 👾 <a href="https://github.com/VarnitRaina">VarnitRaina</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
