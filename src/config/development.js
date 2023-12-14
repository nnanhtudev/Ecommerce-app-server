// config/dev.js
export default {
  PORT: process.env.PORT || 8081,
  apiBaseUrl: "http://localhost:5000/api/v1",
  MONGODB_URI: "mongodb://127.0.0.1:27017/db_Ecommerce",
  URL_CLIENT: "http://localhost:3000",
  URL_ADMIN: "http://localhost:3001",
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
  },
};
