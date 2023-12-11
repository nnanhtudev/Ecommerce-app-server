// routes/admin/user.js
import express from "express";
import historyController from "../../controllers/admin/historyController";
import { checkUserPermission } from "../../middlewares/AuthorUser";
import { checkUserJWT } from "../../middlewares/AuthenUser";

const router = express.Router();

router.all("*", checkUserJWT, checkUserPermission);

router.get("/all", historyController.getAllOrder);

export default router;
