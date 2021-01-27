const mongoose=require("mongoose");

const Comment=new mongoose.Schema({
    userName: {type: String, required:true},
    userPic: {type:String, required: true},
    userComment: {type:String,required: true},
    idItinerary:{type: mongoose.Schema.ObjectId,ref: "itinerary"}
})
const Comment = mongoose.model("comment",CommentSchema);
module.exports = Comment;