// routes/admin/user.js
import express from "express";
import productController from "../../controllers/admin/productController";
import { getAllListProduct } from "../../controllers/client/productController";
import { checkUserPermission } from "../../middlewares/AuthorUser";
import { checkUserJWT } from "../../middlewares/AuthenUser";

const router = express.Router();

router.all("*", checkUserJWT, checkUserPermission);

router.get("/all", getAllListProduct);
router.get("/pagination", productController.getPagination);

router.post("/add", productController.createNewProduct);

export default router;
