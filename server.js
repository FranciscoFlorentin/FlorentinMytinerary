const express=require("express");
const cors= require("cors");
const router=require("./routes/index");
require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",router);

// pongo a escuchar el puerto 4000
app.listen(4000,()=>console.log("App listening on port 4000"));
// AGREGAR NODEMON A package.json
//   "scripts": {
    // "start": "nodemon src/server.js",
    // "test": "echo \"Error: no test specified\" && exit 1"
//   },