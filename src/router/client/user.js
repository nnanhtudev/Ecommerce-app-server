// routes/admin/user.js
import express from "express";
import userController from "../../controllers/client/userControllers";
const router = express.Router();

router.post("/register", userController.handleRegister);

export default router;
