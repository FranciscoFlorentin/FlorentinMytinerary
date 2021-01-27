const mongoose = require("mongoose");
const itinerarySchema= new mongoose.Schema({
    userName: {type: String, required: true },
    userPicName: {type: String, required: true},
    likes: {type:Number, default:0},
    duration: {type:Number, required: true},
    price: {type:Number,required: true},
    hashtag: {type:[String], required: true}
})

const Itinerary= mongoose.model("itinerary",citySchema);

module.exports= Itinerary;