import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/youtube", controller.GET);
router.get("/youtube/:tubeId", controller.GET);
router.post("/youtube",controller.POST);
router.put("/youtube/:tubeId",controller.PUT);
router.delete("/youtube/:tubeId", controller.DELETE);


export default router;