import express from "express";
import {Router} from "express";
const router = express.Router();
import { getAllUsers } from "../controllers/usersConroller";

router.get("/", getAllUsers);

export default router;