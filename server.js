const express=require("express");
const cors= require("cors");
const router=require("./routes/index");
require("./config/database")

const app = express();
// middle ware que se ejecutan antes de llegar a la ruta
app.use(cors());
// express.json() traduce los datos json a objeto
app.use(express.json());
app.use("/api",router);


app.listen(4000,()=>console.log("App listening on port 4000"));