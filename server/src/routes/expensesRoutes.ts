import express from "express";
import { Router } from "express";
const router=express.Router();
import { getExpensesByCategory } from "../controllers/expensesController";

router.get("/", getExpensesByCategory);

export default router;