import {WebSocketServer} from "https://deno.land/x/websocket@v0.1.4/mod.ts";
const ws = new WebSocketServer(9090);

ws.on('connection',(socket)=>{
    console.log('new user connected');
    
    socket.on('message', (data)=>{
        console.log(data);
        socket.send(data);
    })
})
