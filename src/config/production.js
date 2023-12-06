// config/prod.js
export default {
  PORT: process.env.PORT || 8080,
  apiBaseUrl: "https://production-api.example.com/api",
  socketIoPort: 5002,
};
