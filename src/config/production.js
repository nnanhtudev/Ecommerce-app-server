// config/prod.js
export default {
  PORT: process.env.PORT || 8080,
  apiBaseUrl: "https://production-api.example.com/api",
  socketIoPort: process.env.SOCKET_IO_PORT || 5001,
  // Cấu hình sản phẩm khác nếu cần
};
