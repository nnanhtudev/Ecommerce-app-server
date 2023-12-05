import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database";
import initAPIRoutesAdmin from "./router/admin";
import initAPIRoutesClient from "./router/client";
import configCORS from "./config/cors";
// import routes from "./routes"; // Import routes từ thư mục routes

const app = express();

//connect to DB
connectDB();
//config cors
configCORS(app);

// config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config routes
initAPIRoutesAdmin(app, "api/v1/admin");
initAPIRoutesClient(app, "api/v1/client");

export default app;
