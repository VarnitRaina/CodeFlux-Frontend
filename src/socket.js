import {io} from 'socket.io-client';



export const initSocket=async ()=>{
    const options={
        reconnectionAttempts: 5,
        timeout: 10000, 
        transports: ['websocket']
    };
    const backendURL=process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    return io(backendURL,options);
}