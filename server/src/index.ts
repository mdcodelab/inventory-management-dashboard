import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

//routes import
import dashboardRouter from "./routes/dashboardRoutes";
import productsRouter from "./routes/productsRoutes";
import usersRouter from "./routes/usersRoutes";

//configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.get("/", (req, res)=> {
  res.send("Home page")
})

app.use("/dashboard", dashboardRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

//server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
