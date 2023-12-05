import http from "http";
import socketIO from "socket.io";
import config from "./src/config";
import app from "./src/app";

const server = http.createServer(app);
const io = socketIO(server);

// Kết nối Express và Socket.io với server HTTP
server.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`);
});
