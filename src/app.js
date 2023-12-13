import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database";
import initAPIRoutesAdmin from "./router/admin";
import initAPIRoutesClient from "./router/client";
import configCORS from "./config/cors";
import cookieParser from "cookie-parser";
import initAPIRoutesChat from "./router/chat";
const app = express();

//connect to DB
connectDB();
//config cors
configCORS(app);

// config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookies parser
app.use(cookieParser());

// config routes

initAPIRoutesClient(app, "api/v1/client");
initAPIRoutesAdmin(app, "api/v1/admin");

// // Attach Socket.IO to the app
// app.use((req, res, next) => {
//   res.io = io;
//   next();
// });

initAPIRoutesChat(app, "api/v1");

export default app;
