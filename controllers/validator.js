const Joi=require("joi");

const validator={
    validateNewAccount:(req,res,next)=>{
        const schema=Joi.object({
            userName: Joi.string().trim().required().email(),
            password: Joi.string().trim().required().pattern(/(?=.*\d)/).min(5),
            name:Joi.string().trim().required().min(2).max(13),
            lastName:Joi.string().trim().required().min(2).max(13)
        })
        const validation = schema.validate(req.body,{abourEarly:false});
        if(!validation.error){next()}
        else {res.json({sucess:false,errores:"fields errors"})}

    }
}
module.exports=validator;