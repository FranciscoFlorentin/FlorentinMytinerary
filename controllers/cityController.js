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
            return res.json({sucess:true, response: newCity})
        })
        .catch(error=>{
            return res.json({sucess:false, error:error})
        })
    },
    allTheCities: (req,res)=>{
        // al modelo City encontrame devuelve una promesa
        // const data= await City.find();
        // res.json({response: data});
        City.find()
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:error})})
        // try{
        //     await City.find()
        //     res.json({sucess:true,})
        // } catch(error){
        //     console.log(error);
        // } finally{
        //     res.json({sucess: false})
        // }
    },
    singleCity: async (req,res)=>{
        const reqCityName=(req.params.cityName);
        console.log(reqCityName)
        const data= await City.findOne({cityName:reqCityName});
        res.json({response: data});
    }
}

module.exports= cityController