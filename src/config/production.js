// config/prod.js
export default {
  PORT: process.env.PORT || 8080,
  apiBaseUrl: "https://production-api.example.com/api",
  MONGODB_URI: process.env.MONGODB_URI,
  cors: {
    origin: process.env.URL_CLIENT,
    methods: ["GET", "POST"],
  },
};
