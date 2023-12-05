// routes/admin/user.js
import express from "express";

const router = express.Router();

router.get("/read", (req, res) => {
  res.send("Hello World!");
});

export default router;
