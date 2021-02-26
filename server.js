const express=require("express");
const cors= require("cors");
require("dotenv").config();
const router=require("./routes/index");
require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",router);

const port=process.env.PORT;
const host=process.env.HOST || "0.0.0.0";
app.listen(process.env.PORT,()=>console.log("App listening on port 4000"));
