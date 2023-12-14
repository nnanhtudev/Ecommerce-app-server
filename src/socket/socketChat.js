const initSocket = (io) => {
  const chatNamespace = io.of("/chat");

  chatNamespace.on("connection", (socket) => {
    console.log("A user connected to chat");

    socket.on("join", ({ role }) => {
      console.log(`User joined as ${role}`);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

    socket.on("send_message", (data) => {
      console.log("receive_message", data);
      chatNamespace.emit("receive_message", data);
    });
  });
};

export { initSocket };
