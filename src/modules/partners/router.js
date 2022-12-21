import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/partners", controller.GET);
router.get("/partners/:partnerId", controller.GET);
router.post("/partners",controller.POST);
router.put("/partners/:partnerId",controller.PUT);
router.delete("/partners/:partnerId", controller.DELETE);


export default router;