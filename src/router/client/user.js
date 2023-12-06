// routes/client/user.js
import express from "express";
import userController from "../../controllers/client/userControllers";
import { checkUserJWT } from "../../middlewares/AuthorUser";
const router = express.Router();

router.all("*", checkUserJWT);

router.post("/register", userController.handleRegister);
router.post("/login", userController.handleLogin);
router.get("/account", userController.handleGetAccount);

export default router;
