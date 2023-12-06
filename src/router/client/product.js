import express from "express";
import productController from "../../controllers/client/productController";

const router = express.Router();

router.get("/list", productController.getAllListProduct);

export default router;
