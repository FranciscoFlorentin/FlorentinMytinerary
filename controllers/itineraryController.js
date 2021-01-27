const Itinerary=require("../models/Itinerary");
const Itinerary ={
    addItinerary: (req, res)=>{
        const newItinerary = new Itinerary({
            // cityName: req.body.cityName,
            // cityPic: req.body.cityPic
        })
        newItinerary.save()
        .then(newCity=> {   return res.json({sucess:true, response: newCity})})
        .catch(error=>{ return res.json({sucess:false, error:"fail to load new itinerary"})})
    },
    getAllItineraries: (req,res)=>{
        Itinerary.find()
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:"fail to get the itineraries"})})
    },
    // oneItinerary: async (req,res)=>{
    //     const reqCityName=(req.params.cityName);
    //     const data= await City.findOne({cityName:reqCityName});
    //     res.json({response: data});
    // }
}

module.exports= cityController