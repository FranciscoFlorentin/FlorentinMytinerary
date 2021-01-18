const express=require("express");
const cors= require("cors");

const app = express();
app.use(cors());
// request(datos del pedido) and response ()
app.get("/api",(req,res)=>{
    res.json({
        mensaje: "Bienvenido"
    })
})

app.listen(4000,()=>console.log("App listening on port 4000"));