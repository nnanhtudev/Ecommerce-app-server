// socketCheckOut.js

const initSocketCheckOut = (io) => {
  const chatNamespace = io.of("/checkout");

  chatNamespace.on("connection", (socket) => {
    console.log("User connected to Checkout");

    socket.on("disconnect", () => {
      console.log("User disconnected from Checkout");
    });
    socket.on("send_order", (data) => {
      console.log("Received order from client:", data);

      // Thực hiện xử lý cho đơn đặt hàng, ví dụ: lưu vào database
      // ...

      // Phản hồi cho client
      chatNamespace.emit("order_response", data);
    });
  });
};

export { initSocketCheckOut };
