const mongoose = require("mongoose");
const itinerarySchema= new mongoose.Schema({
    itineraryName: {type: String, required: true},
    userName: {type: String, required: true },
    userPicName: {type: String, required: true},
    likes: {type:Number, default:0},
    userLikes:{type:[String]},
    duration: {type:Number, required: true},
    price: {type:Number,required: true},
    hashtag: {type:[String], required: true},
    activities: [{
        activityName: {type: String, required:true},
        activityPic: {type:String, required: true}
    }],
    comments: [{
        userId:{type:String,required:true},
        userName: {type: String, required:true},
        userPic: {type:String, required: true},
        userComment: {type:String}
    }],
    idCity: {type: mongoose.Schema.ObjectId , ref: "city"}
})

const Itinerary= mongoose.model("itinerary",itinerarySchema);

module.exports= Itinerary;