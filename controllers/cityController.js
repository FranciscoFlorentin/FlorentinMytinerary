const City= require("../models/City");
const cityController ={
    addCity: (req, res)=>{
        const cityAgrabar = new City({
            cityName: req.body.cityName,
            cityPic:req.body.cityPic
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
    oneCity: (req,res)=>{
        City.findOne(req.params)
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:"Fail to get city"})})
    },
    deleteCity: async (req, res) => {
        City.findOneAndDelete(req.params)
        .then(()=>{return res.json({sucess:true, response: "City deleted"})})
        .catch(error=>{return res.json({sucess:false, response: "Fail to delete city"})})
    }
}

module.exports= cityController