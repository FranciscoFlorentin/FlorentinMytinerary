const User= require("../models/User");

const userController={
    signUp:(req,res)=>{
        const {username, password,name,lastname}=req.body
        if(username=== "" || password==="" || name===""|| lastname===""){
            return res.json({sucess:false, res:"fill the fields"})
        }
    },
    signIn:(req,res)=>{

    }
}
module.exports= userController;