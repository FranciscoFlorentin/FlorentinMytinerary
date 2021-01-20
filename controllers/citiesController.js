const { request } = require("express");
const City= require("../models/City");
// const cities=[
//     {name:"Santa Fe", dir:"./assets/santa fe.jpg"},
//     {name:"Montevideo", dir:"./assets/Montevideo.jpg"},
//     {name:"Sao Paulo", dir:"./assets/Sao Paulo.jpg"},
//     {name:"Cartagena", dir:"./assets/Cartagena.jpg"},{name:"Ámsterdam", dir:"./assets/amsterdam.jpg"},
//     {name:"Lisbon", dir:"./assets/Lisboa.jpg"},
//     {name:"Rome", dir:"./assets/roma.jpg"},
//     {name:"Prague", dir:"./assets/praga.jpg"},{name:"Seoul", dir:"./assets/seul.jpg"},
//     {name:"Shenzhen", dir:"./assets/shenzhen.jpg"},
//     {name:"Bangkok", dir:"./assets/bangkok.jpg"},
//     {name:"Beijing", dir:"./assets/pekin.jpg"}
// ]
const citiesController={
    addCity: (req, res)=>{
        console.log(req)
        const newCity = new City({
            // pordria destructurar los datos
            // const {cityName,cityPic}
           
            cityName:  req.body.cityName,
            cityPic: req.body.cityPic
            
        })
        // .save devuelve una promesa
        newCity.save()
        .then(newCity1=> {return res.json({sucess:true, respuesta: newCity1})})
        .catch(error=>{return res.json({sucess:false, error:error})})
    },
    allTheCities: (req,res)=>{
        // al modelo City encontrame devuelve una promesa
        City.find()
        .then(data=>{return res.json({sucess:false,respuesta:data})})
        .catch(error=>{return res.json({sucess:false, erorr: error})})
        res.json({response: data})
    },
    singleCity: (req,res)=>{
        const cityName=(req.params.cityName)
        cities.map(city=>{
            if(city.name.replace(/ /g, "")===cityName){
                res.json({
                    response:city
                })
            }
        })   
    }
}

module.exports= citiesController;