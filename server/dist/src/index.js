"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
//routes import
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const expensesRoutes_1 = __importDefault(require("./routes/expensesRoutes"));
//configuration
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
//routes
app.get("/", (req, res) => {
    res.send("Home page");
});
app.use("/dashboard", dashboardRoutes_1.default);
app.use("/products", productsRoutes_1.default);
app.use("/users", usersRoutes_1.default);
app.use("/expenses", expensesRoutes_1.default);
//server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
