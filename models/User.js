const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    userName:{type:String, unique:true},
    password: String,
    name: String,
    lastName: String,
    rol: {type: String,default: "registered"}
})

const User=mongoose.model("user",userSchema);

module.exports=User;