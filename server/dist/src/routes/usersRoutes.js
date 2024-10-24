"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersConroller_1 = require("../controllers/usersConroller");
router.get("/", usersConroller_1.getAllUsers);
exports.default = router;
