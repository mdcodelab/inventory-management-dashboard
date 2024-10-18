import express from "express";
import {Router} from "express";
const router = express.Router();
import { getProducts, createProduct } from "../controllers/productsController";

router.get("/", getProducts);
router.post("/", createProduct);

export default router;