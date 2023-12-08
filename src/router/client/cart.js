import express from "express";
import cardController from "../../controllers/client/cardController";

const router = express.Router();

router.post("/add", cardController.addCard);
router.get("/read", cardController.getCardByUser);
router.put("/update", cardController.editCartsByUser);
router.delete("/delete", cardController.deleteCartsByUser);

export default router;
