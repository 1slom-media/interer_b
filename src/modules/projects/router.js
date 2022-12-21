import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/projects", controller.GET);
router.get("/projects/:projectId", controller.GET);
router.post("/projects",controller.POST);
router.put("/projects/:projectId",controller.PUT);
router.delete("/projects/:projectId", controller.DELETE);


export default router;