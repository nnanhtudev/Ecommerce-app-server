import express from "express";
import orderController from "../../controllers/client/orderController";

const router = express.Router();

router.get("/histories/:id", orderController.getHistoryOrderById);
router.get("/histories", orderController.getHistoryOrder);
router.post("/add", orderController.addOrder);
router.post("/sendMail", orderController.sendMailOrder);

export default router;
