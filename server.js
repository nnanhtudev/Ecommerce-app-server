import http from "http";
import { Server } from "socket.io";
import config from "./src/config/index";
import app from "./src/app";
import { initSocket } from "./src/socket/socketManager";
// import SocketServices from "./src/services/chat.service";

const server = http.createServer(app);
const io = new Server(server, { cors: config.cors });

initSocket(io);
// const chatNamespace = io.of("/chat");
// chatNamespace.on("connection", SocketServices);

server.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`);
});
