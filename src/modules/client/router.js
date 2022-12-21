import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/client", controller.GET);
router.get("/client/:clientId", controller.GET);
router.post("/client",controller.POST);
router.put("/client/:clientId",controller.PUT);
router.delete("/client/:clientId", controller.DELETE);


export default router;