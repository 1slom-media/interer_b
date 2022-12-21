import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/single", controller.GET);
router.get("/single/:singleId", controller.GET);
router.post("/single",controller.POST);
router.put("/single/:singleId",controller.PUT);
router.delete("/single/:singleId", controller.DELETE);


export default router;