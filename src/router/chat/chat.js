// router/chat.js
import express from "express";
import chatController from "../../controllers/chat/chatController";

const router = express.Router();

router.post("/createNewRoom", chatController.createNewRoom);
router.put("/addMessage", chatController.addMessage);
router.get("/getById", chatController.getMessageByRoomId);
//admin
router.get("/getAllRoom", chatController.getAllRoom);

export default router;
