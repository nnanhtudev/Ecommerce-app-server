// routes/client/user.js
import express from "express";
import userController from "../../controllers/client/userControllers";
import { checkUserJWT } from "../../middlewares/AuthenUser";
const router = express.Router();

router.all("*", checkUserJWT);

router.get("/account", userController.handleGetAccount);

router.post("/register", userController.handleRegister);
router.post("/login", userController.handleLogin);
router.post("/logout", userController.handleLogOut);

export default router;
