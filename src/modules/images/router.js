import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/images", controller.GET);
router.get("/images/:imageId", controller.GET);
router.post("/images",controller.POST);
router.put("/images/:imageId",controller.PUT);
router.delete("/images/:imageId", controller.DELETE);


export default router;