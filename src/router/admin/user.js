// routes/admin/user.js
import express from "express";
import userController from "../../controllers/admin/userController";

const router = express.Router();

router.get("/read", userController.getAllUsers);

export default router;
