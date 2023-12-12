import {Server} from "npm:socket.io";

const io = new Server(3000 , {
    cors:{
        origin:['https://thunder-c2t.pages.dev','http://localhost:5173']
    }
});

io.on('connection',(socket)=>{
    console.log(`New connection ${socket.id}`);

    socket.on('msg',(msg)=>{
        io.emit('msg',msg)
    });
});
