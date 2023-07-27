//solo codigo del servidor
import express, { urlencoded } from "express";
import path from "path";
import __dirname from "./utils.js";

//initilizations
export const app = express();

//setting
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.urlencoded({extended: false}));

//gloval variables

//routes
app.get("/", (req, res)=>{
    res.send("Hello World")
})

//static files
app.use(express.static(path.join(__dirname, "public")))


