const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://FranciscoFlorentin:dbFranciscoFlorentin@cluster0.jyz0c.mongodb.net/mytinerary?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>console.log("Base de datos conectada"))
.catch(error=>console.log(error))
