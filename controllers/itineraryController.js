const Itinerary=require("../models/Itinerary");
const itineraryController ={
    addItinerary: (req, res)=>{
        // Destructuro el objeto req.body y instancio newItinerary 
        const {itineraryName,userName,userPicName,likes,duration,price,hashtag,idCity} = req.body;
        const newItinerary = new Itinerary({
            itineraryName,
            userName,
            userPicName,
            likes,
            duration,
            price,
            hashtag,
            idCity,
        })
        newItinerary.save()
        .then(async loadedItinerary=> { 
            // Al nuevo itinerary lo asocio con la ciudad a traves del idCity 
            const populateItinerary= await loadedItinerary.populate("idCity").execPopulate()
            res.json({sucess:true, respuesta: populateItinerary})
            })
        .catch(_error=>{ return res.json({sucess:false, error:"Fail to load new itinerary"})})

    },
    getAllItineraries: (req,res)=>{
        Itinerary.find()
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:"fail to get the itineraries"})})
    },
    deleteItinerary: async (req, res) => {
        const {_id} = req.params;
        console.log(_id)
    }
}

module.exports= itineraryController