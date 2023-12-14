// routes/admin/user.js
import express from "express";
import userController from "../../controllers/admin/userController";
import { checkUserPermission } from "../../middlewares/AuthorUser";
import { checkUserJWT } from "../../middlewares/AuthenUser";
import { getDashboard } from "../../controllers/admin/dashboard";

const router = express.Router();

router.all("*", checkUserJWT, checkUserPermission);

router.get("/read", userController.getAllUsers);
router.get("/dashboard", getDashboard);

router.post("/login", userController.loginAdmin);

export default router;
