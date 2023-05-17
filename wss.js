import { createSimpleSecureWebsocketServer } from "https://deno.land/x/simple-secure-websocket-server/mod.ts";

const socketHandler = (socket) => {
  socket.onerror = (e) => console.error("socket error", e);
  socket.onopen = () => console.log("new socket connection", socket);
  socket.onclose = () => console.log("bye, socket connection", socket);
};

const server = createSimpleSecureWebsocketServer({
  socketHandler,
  port: 8888,
  certFile: "./certs/certfile.pem", // certfile path
  keyFile: "./certs/keyfile.pem", // keyfile path
});

server.listen();
