const mongoose = require("mongoose");
const citySchema= new mongoose.Schema({
    // tipo de dato , si es obligatorio o no , valor por defecto(no tiene que ser obligatorio)
    cityName: {type: String, required: true },
    cityPic: {type: String, required: true}
})

const City= mongoose.model("city",citySchema);

module.exports= City;