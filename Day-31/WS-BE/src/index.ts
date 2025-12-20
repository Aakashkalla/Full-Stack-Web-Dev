import {WebSocketServer} from 'ws'
const wss = new WebSocketServer({port : 8080}, ()=>{
    console.log("Server Started")
});

//event handler
wss.on("connection", (socket)=>{    
    socket.on("message", (e)=>{
        if(e.toString()==='Ping'){
            socket.send('Pong')
        }
    })
}) 