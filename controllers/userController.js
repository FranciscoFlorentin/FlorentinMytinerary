const { response } = require("express");
const User= require("../models/User");
const bcryptjs=require("bcryptjs");

const userController={
    register: async (req,res)=>{
        var errors=[];
        const userFound= await User.findOne({userName});
        if(userFound){errors.push(("User already exists"))};
        if(errors.length===0){
            const passwordHashed = bcryptjs.hashSync(password,10);
            var newUser= new User({userName,password: passwordHashed,firstName,lastName,userPic,userCountry,rol});
            var newUserSaved= await newUser.save()
        }
        return res.json({
            sucess: (errors.length===0) ? true : false,
            errors: errors,
            response: newUserSaved})
    },
    logIn: async (req,res)=>{
        const {userName,password}=req.body;
        const userFound= await User.findOne({userName})
        if(!userFound){
            return res.json({sucess:false, response: "incorrect username or password, please try again"})
        }
        const passwordMatches= bcryptjs.compareSync(password,userFound.password);
        if(!passwordMatches){
            return res.json({sucess:false, response:"incorrect username or password, please try again"})
        }
        return res.json({
            sucess:true,
            response: userFound})
        

    }
}
module.exports= userController;