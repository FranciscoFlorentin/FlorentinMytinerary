const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    userName:String ,
    password: String,
    firstName: String,
    lastName: String,
    userPic: String,
    countryName: String, 
    countryPic: String,
    rol: {type: String , default: "registered"}
})

const User=mongoose.model("user",userSchema);

module.exports=User;