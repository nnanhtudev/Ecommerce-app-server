import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database";
import initAPIRoutesAdmin from "./router/admin";
import initAPIRoutesClient from "./router/client";
import configCORS from "./config/cors";
import cookieParser from "cookie-parser";

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

export default app;
