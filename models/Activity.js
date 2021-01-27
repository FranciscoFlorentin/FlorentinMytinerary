const mongoose=require("mongoose");

const activitySchema=new mongoose.Schema({
    activityName: {type: String, required:true},
    activityPic: {type:String, required: true},
    idItinerary:{type: mongoose.Schema.ObjectId,ref: "itinerary"}
})
const Activity = mongoose.model("activity",activitySchema);
module.exports = Activity;