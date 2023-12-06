import http from "http";
import { Server } from "socket.io";
import config from "./src/config";
import app from "./src/app";

const server = http.createServer(app);
const io = new Server(server, { cors: config.cors });

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });

server.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`);
});
