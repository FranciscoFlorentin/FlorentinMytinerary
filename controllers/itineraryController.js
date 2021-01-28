const Itinerary=require("../models/Itinerary");
const itineraryController ={
    addItinerary: (req, res)=>{
        const newItinerary = new Itinerary(req.body)
        newItinerary.save()
        .then(async loadedItinerary=> { 
            // Al nuevo itinerary lo asocio con la ciudad a traves del idCity 
            const populateItinerary= await loadedItinerary.populate("idCity").execPopulate();
            res.json({sucess:true, respuesta: populateItinerary});
            })
        .catch(_error=>{ return res.json({sucess:false, error:"Fail to load new itinerary"})});
    },
    getAllItineraries: (req,res)=>{
        Itinerary.find().populate("idCity")
        .then(data=>{return res.json({sucess:true, response:data})})
        .catch(error=>{return res.json({sucess:false, response:"fail to get the itineraries"})})
    },
    deleteItinerary: async (req, res) => {
        const {_id} = req.params;
        Itinerary.findOneAndRemove({_id})
        .then(()=>{return res.json({sucess:true, response:"Itinerary deleted"})})
        .catch(error=>{return res.json({sucess:false, response:"fail to get the itineraries"})})
    },
    editItinerary: (req,res)=>{
        // ENCUENTRA Y ACTUALIZA CON LOS PARAMETROS DEL REQ.BODY, IDENTIFICO A QUIEN A TRAVES DEL ID EN REQ.PARAMS
        Itinerary.findOneAndUpdate(req.params,req.body,{new:true})
        .then(itineraryUpdated=>res.json({sucess:true, response: itineraryUpdated}))
        .catch(error=>res.json({sucess:false,error}));
    }
}

module.exports= itineraryController