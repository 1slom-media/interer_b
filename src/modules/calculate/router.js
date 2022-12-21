import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/calculate", controller.GET);
router.get("/calculate/:calculateId", controller.GET);
router.post("/calculate",controller.POST);
router.put("/calculate/:calculateId",controller.PUT);
router.delete("/calculate/:calculateId", controller.DELETE);

export default router;
