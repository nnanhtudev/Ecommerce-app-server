// config/dev.js
export default {
  PORT: process.env.PORT || 8081,
  apiBaseUrl: "http://localhost:5000/api/v1",
  MONGODB_URI: "mongodb://127.0.0.1:27017/db_Ecommerce",
  cors: {
    origin: process.env.URL_CLIENT,
    methods: ["GET", "POST"],
  },
};
