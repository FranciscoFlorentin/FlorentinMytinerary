const Joi=require("joi");

const validator={
    validateNewAccount:(req,res,next)=>{
        if(!req.body.googleUser){
            const schema=Joi.object({
                userName: Joi.string().trim().required().email().rule({ message: '"username" must be a valid email' }),
                password: Joi.string().required().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/).rule({ message: '"password" must contain at least one number, one lowercase and one uppercase letter, six characters' }),
                firstName:Joi.string().trim().required().min(2).max(13),
                lastName:Joi.string().trim().required().min(2).max(13),
                userPic:Joi.string().uri().required().trim().rule({ message: '"user pic" must be a valid url' }),
                countryName:Joi.string().trim().required(),
                countryPic:Joi.string().trim().required(),
                googleUser:Joi.boolean(),
                rol:Joi.string().trim()
            })
            const validation = schema.validate(req.body,{abourEarly:false});
            if(!validation.error){
                next();
            }else {
           console.log(validation.error.details[0].message)
            res.json({sucess:false,errors:validation.error.details[0].message})
            }
        }else {
            next();
        }
    },
    validateGoogleAccount: (req,res,next)=>{
        if(!req.user.googleUser){
            next();
        }else {
            res.json({sucess:false, response: "google account"})
        }
    },
    validateAdmin: (req,res,next)=>{
        
        if(req.user.rol==="admin"){
            next();
        }else {
            res.json({sucess:false, response: "non-admin user"})
        }
    }

}
module.exports=validator;