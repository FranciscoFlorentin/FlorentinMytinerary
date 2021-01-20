const City= require("../models/City");
const data=[
    {
        name: "asd"
    },
    {
        name: "toasds"
    }
]
const cityController ={
    addCity: (req, res)=>{
        const cityAgrabar = new City({
            // pordria destructurar los datos
            // const {cityName,cityPic}
            cityName: req.body.cityName,
            cityPic: req.body.cityPic
        })
        // .save devuelve una promesa
        cityAgrabar.save()
        .then(newCity=> {
            return res.json({sucess:true, respuesta: newCity})
        })
        .catch(error=>{
            return res.json({sucess:false, error:error})
        })
    },
    allTheCities: (req,res)=>{
        // al modelo City encontrame devuelve una promesa
        console.log("entro a get allTheCities")
        // try{
        //     await City.find()
        //     res.json({sucess:true,})
        // } catch(e){
        // } finally{
        //     res.json({sucess: false})
        // }
        res.json({response:data})
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

module.exports= cityController