"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const dashboardControler_1 = require("../controllers/dashboardControler");
router.get("/", dashboardControler_1.getDashboardElements);
exports.default = router;
