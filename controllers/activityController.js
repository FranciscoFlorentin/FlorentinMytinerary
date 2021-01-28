const Activity = require("../models/Activity")
const activityController={
       addActivity:(req,res)=>{
        // Instancio una nueva Activity y le paso los parametros mandados a traves desde (req.body)
           const newActivity=new Activity(req.body)
           newActivity.save()
           .then(async loadedActivity=> { 
            const populateActivity= await loadedActivity.populate("idItinerary").execPopulate()
            res.json({sucess:true, respuesta: populateActivity})
           })
           .catch(_error=>{ return res.json({sucess:false, error:"Fail to load new Activity"})})
       },
       getActivities:(req,res)=>{
            Activity.find()
            .then(data=>{return res.json({sucess:true, response:data})})
            .catch(error=>{return res.json({sucess:false, response:"Fail to get activities"})})
       }
}

module.exports = activityController;