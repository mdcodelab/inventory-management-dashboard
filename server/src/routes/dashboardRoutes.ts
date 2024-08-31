import { Router } from "express";
const router = Router();
import {getDashboardElements} from "../controllers/dashboardControler";

router.get("/", getDashboardElements);

export default router;


