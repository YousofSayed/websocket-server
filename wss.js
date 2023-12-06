import {Server} from "npm:socket.io";

const io = new Server(3000 , {
    cors:{
        origin:'*'
    }
});

io.on('connection',(socket)=>{
    console.log(`New connection ${socket.id}`);

    socket.on('msg',(msg)=>{
        socket.broadcast.emit('msg',msg)
    });
});
