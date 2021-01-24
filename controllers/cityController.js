const City= require("../models/City");
const cityController ={
    addCity: (req, res)=>{
        const cityAgrabar = new City({
            cityName: req.body.cityName,
            cityPic: req.body.cityPic
        })
        cityAgrabar.save()
        .then(newCity=> {
            return res.json({sucess:true, response: newCity})
        })
        .catch(error=>{
            return res.json({sucess:false, error:error})
        })
    },
    allTheCities: (req,res)=>{
        City.find()
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:error})})
    },
    singleCity: async (req,res)=>{
        // Obtengo el nombre de la ruta de la ciudad de /Itineraries/:cityName
        const reqCityName=(req.params.cityName);
        const data= await City.findOne({cityName:reqCityName});
        res.json({response: data});
    }
}

module.exports= cityController