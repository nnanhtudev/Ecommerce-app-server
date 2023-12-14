// config/prod.js
export default {
  PORT: process.env.PORT || 8080,
  apiBaseUrl: process.env.APP_URL,
  MONGODB_URI: process.env.MONGODB_URI,
  URL_CLIENT: process.env.URL_CLIENT,
  URL_ADMIN: process.env.URL_ADMIN,
  cors: {
    origin: (process.env.URL_CLIENT, process.env.URL_ADMIN),
    methods: ["GET", "POST"],
  },
};
