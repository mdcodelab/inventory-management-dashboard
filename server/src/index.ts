import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

{/* ROUTES IMPORT*/}

{/* CONFIGURATION*/}
dotenv.configDotenv();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

{/* ROUTES*/}

{/* SERVER*/}
const port = process.env.PORT || 3001;
app.listen(()=> {
    console.log(`Port is listening at port ${port}`);
})
