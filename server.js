const express=require("express");
const cors= require("cors");
const router=require("./routes/index");
require("./config/database")

const app = express();
// middle ware que se ejecutan antes de llegar a la ruta
app.use(cors());
<<<<<<< HEAD

// request(datos del pedido) and response ()
// GET= pedir informacion
// POST= mandar informacion
// PUT= modificar informacion
// DELETE= borrar informacion

// TODO EL CONTENIDO ESTA ACA
// const data=[{}]

//     (endpoint) ,(hace tal cosa)
// app.get("/products" , hace tal cosa) => DEVUELVE TODO
// app.get("/product/:id", hace tal cosa) =>DINAMICO
// app.get(ENDPOINT, CONTROLADOR)
// app.get(ENDPOINT, (req, res)=>{ devolver al frontend el req })
// app.get("/products", (req,res)=>{
//     res.json({
//         respuesta: data
//     })
// })
// SE PUEDE PROBAR EN INSOMIA (http://localhost:4000/products)

// app.get("/product/:id",(req, res)=>{
//     console.log(req.params) (ahi tengo el id que puse en la linea 28 y asi capturarlo)
//     const id=parseInt(req.params.id);
//      data.map(articulo=>{
//          if(articulo._id)
//       })
// })


app.get("/api",(req,res)=>{
    res.json({
        mensaje: "Bienvenido"
    })
})
=======
// express.json() traduce los datos json a objeto
app.use(express.json());
app.use("/api",router);

>>>>>>> 7368a5567a10be24ce131edb26bfa0913265727e

// pongo a escuchar el puerto 4000
app.listen(4000,()=>console.log("App listening on port 4000"));
// AGREGAR NODEMON A package.json
//   "scripts": {
    // "start": "nodemon src/server.js",
    // "test": "echo \"Error: no test specified\" && exit 1"
//   },