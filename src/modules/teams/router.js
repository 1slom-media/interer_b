import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/teams", controller.GET);
router.get("/teams/:teamId", controller.GET);
router.post("/teams",controller.POST);
router.put("/teams/:teamId",controller.PUT);
router.delete("/teams/:teamId", controller.DELETE);


export default router;