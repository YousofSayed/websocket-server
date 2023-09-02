import {WebSocketServer} from "https://deno.land/x/websocket@v0.1.4/mod.ts";
const ws = new WebSocketServer(9090);
const sockets =[];

ws.on('connection',(socket)=>{
    console.log('new user connected');
    sockets.push(socket);
    
    socket.on('message', (data)=>{
        sockets.forEach((soc)=>{
            if(soc != socket){
                console.log(true)
                soc.send(data);
            }
        })
    })
})
