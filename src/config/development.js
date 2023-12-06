// config/dev.js
export default {
  PORT: process.env.PORT || 8081,
  apiBaseUrl: "http://localhost:5000/api/v1",
  socketIoPort: 5001,
  cors: {
    origin: process.env.URL_CLIENT,
    methods: ["GET", "POST"],
  },
};
