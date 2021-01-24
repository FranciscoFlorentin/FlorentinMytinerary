const mongoose=require("mongoose");

mongoose.connect(process.env.MONGOBD,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>console.log("Base de datos conectada"))
.catch(error=>console.log(error))
