// routes/admin/user.js
import express from "express";
import userController from "../../controllers/admin/userController";
import { checkUserPermission } from "../../middlewares/AuthorUser";
import { checkUserJWT } from "../../middlewares/AuthenUser";

const router = express.Router();

router.all("*", checkUserJWT, checkUserPermission);

router.get("/read", userController.getAllUsers);

router.post("/login", userController.loginAdmin);

export default router;
