const moongose=require("mongoose");

moongose.connect("mongodb+srv://FranciscoFlorentin:dbFranciscoFlorentin@cluster0.jyz0c.mongodb.net/mytinerary?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then(()=>console.log("Database connected"))
.catch(error=>console.log(error))
