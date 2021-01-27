const express = require("express");
const router = express.Router();
const cityController=require("../controllers/cityController");
const itineraryController=require("../controllers/itineraryController");

// Manejo de /cities
router.route("/cities")
    .get(cityController.allTheCities)
    .post(cityController.addCity);

//Manejo de 1 ciudad en particular

router.route("/itineraries/:cityName")
    .get(cityController.singleCity)
    .delete(cityController.deleteCity);

// Manejo de todos los itineraries

router.route("/itineraries")
    .post(itineraryController.addItinerary)
    .get(itineraryController.getAllItineraries)

router.route("/itineraries/:id")
    .delete(itineraryController.deleteItinerary)
module.exports=router