const SocketServices = (socket) => {
  // Event handler for user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnect");
  });
  // Event handler for user join
  socket.on("join", (data) => {
    console.log(`User join id is`, data);
  });

  // Event handler for receiving messages
  socket.on("send_message", (data) => {
    console.log("Received message:", data);

    // Assuming you want to emit a "receive_message" event to the same socket
    socket.emit("receive_message", {
      /* data to send */
    });

    // If you want to emit to all clients, use io.emit("receive_message", { /* data to send */ });
  });
};

module.exports = SocketServices;
