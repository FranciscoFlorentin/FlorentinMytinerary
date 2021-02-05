const User= require("../models/User");
const bcryptjs=require("bcryptjs");
const jasonWebToken=require("jsonwebtoken");
const userController={
    register: async (req,res)=>{
        const {userName,password,firstName,lastName,userPic,userCountry,rol}=req.body;
        var errors=[];
        const userFound= User.findOne({userName});
        if(!userFound){errors.push(("User already exists"))};
        if(errors.length===0){
            const passwordHashed = bcryptjs.hashSync(password,10);
            var newUser= new User({userName,password: passwordHashed,firstName,lastName,userPic,userCountry,rol});
            var newUserSaved= await newUser.save()
            var token=jasonWebToken.sign({...newUserSaved}, process.env.JWT_SECRET_KEY, {})
            //              (lo que voy a encriptar, key , options)
        }
        console.log(userFound.firstName,userFound.userPic)
        return res.json({
            sucess: (errors.length===0) ? true : false,
            errors: errors,
            response: {token,name:userFound.firstName, userPic:userFound.userPic }
        })
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
        var token=jasonWebToken.sign({...userFound}, process.env.JWT_SECRET_KEY, {})
        return res.json({
            sucess:true,
            response: {token,name:userFound.firstName, pic: userFound.userPic }
        })
        

    }
}
module.exports= userController;