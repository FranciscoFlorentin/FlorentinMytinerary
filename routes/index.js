const express = require("express");
const router = express.Router();
const cityController=require("../controllers/cityController");
// Devuelve toodas las ciudades
router.route("/cities")
.get(cityController.allTheCities)
.post(cityController.addCity)

// Devuelve 1 sola ciudad
router.route("/itineraries/:cityName")
.get(cityController.singleCity)

module.exports=router