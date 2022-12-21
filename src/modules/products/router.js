import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/products", controller.GET);
router.get("/products/:productId", controller.GET);
router.post("/products",controller.POST);
router.put("/products/:productId",controller.PUT);
router.delete("/products/:productId", controller.DELETE);

export default router;
