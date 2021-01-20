const express=require("express");
const cors= require("cors");

const app = express();
app.use(cors());

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

// pongo a escuchar el puerto 4000
app.listen(4000,()=>console.log("App listening on port 4000"));
// AGREGAR NODEMON A package.json
//   "scripts": {
    // "start": "nodemon src/server.js",
    // "test": "echo \"Error: no test specified\" && exit 1"
//   },