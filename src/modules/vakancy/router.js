import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/vakancy", controller.GET);
router.get("/vakancy/:vakancyId", controller.GET);
router.post("/vakancy",controller.POST);
router.put("/vakancy/:vakancyId",controller.PUT);
router.delete("/vakancy/:vakancyId", controller.DELETE);


export default router;