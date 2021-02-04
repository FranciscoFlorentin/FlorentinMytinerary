const Joi=require("joi");

const validator={
    validateNewAccount:(req,res,next)=>{
        const schema=Joi.object({
            userName: Joi.string().trim().required().email(),
            password: Joi.string().trim().required().pattern(/(?=.*\d)/).min(5),
            firstName:Joi.string().trim().required().min(2).max(13),
            lastName:Joi.string().trim().required().min(2).max(13),
            userPic:Joi.string().trim().required(),
            countryName:Joi.string().trim().required(),
            countryPic:Joi.string().trim().required(),
            rol:Joi.string().trim()
        })
        const validation = schema.validate(req.body,{abourEarly:false});
        if(!validation.error){
            next()
        }else {
            console.log(validation.error.details.message)
            res.json({sucess:false,errors:"fields error"})
        }
    },

    validateAdmin: (req,res,next)=>{
        if(res.user.rol==="admin"){
            next();
        }else {
            res.json({sucess:false, response: "non-admin user"})
        }
    }

}
module.exports=validator;