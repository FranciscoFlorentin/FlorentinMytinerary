const express=require("express");
const router = express.Router()
const citiesController=require("../controllers/citiesController");
// Devuelve toodas las ciudades
router.route("/cities")
.post(citiesController.addCity)

// .get(citiesController.allTheCities)

// Devuelve 1 sola ciudad
router.route("/itineraries/:cityName")
// .get(citiesController.singleCity)

module.exports=router