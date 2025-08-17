import React, { useState, useRef, useEffect } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';
import * as ACTIONS from '../Actions';
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const EditorPage = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);
  const joinedRef = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (joinedRef.current) return;
      joinedRef.current = true;

      socketRef.current = await initSocket();
      socketRef.current.on('connect_error', (err) => handleErrors(err));
      socketRef.current.on('connect_failed', (err) => handleErrors(err));
      
      function handleErrors(err) {
        console.log('Socket connection error:', err);
        toast.error('Socket connection failed, try again later.');
        reactNavigator('/');
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });
      
      socketRef.current.on(ACTIONS.JOINED, ({ clients, username, socketId }) => {
        if(username && username !== location.state?.username ){
          toast.success(`${username} joined the room.`);
          console.log('New client joined:', username);
        }
        setClients(clients);
      });

      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        if(username){
          toast.success(`${username} left the room.`);
        }
        setClients((prev)=>{
          return prev.filter(client => client.socketId !== socketId);
        });
      });
    };

    init();
    return () => {
      
    };
  }, []);

  async function copyRoomId(){
    try{
      await navigator.clipboard.writeText(roomId);
      toast.success('Room ID copied to clipboard');
    }
    catch(err){
      toast.error('Failed to copy Room ID');
      console.error('Error copying Room ID:', err);
    }
  }

  function leaveRoom() {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    toast.success('You have left the room');
    reactNavigator('/');
  }

  if (!location.state) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mainWrapper">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/codeflux.png" alt="CodeFlux Logo" />
          </div>
          <h3>Connected Users</h3>
          <div className="clientsList">
            {clients.map(client => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>

        <div className="asideFooter">
          <button className="btn copyBtn" onClick={copyRoomId}>Copy Room ID</button>
          <button className="btn leaveBtn" onClick={leaveRoom}>Leave</button>
        </div>
      </div>

      <div className="editorWrapper">
        <Editor socketRef={socketRef} roomId={roomId}/>
      </div>
    </div>
  );
};

export default EditorPage;