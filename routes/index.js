const express = require("express");
const router = express.Router();
const cityController=require("../controllers/cityController");
const itineraryController=require("../controllers/itineraryController");
const userController=require("../controllers/userController");
// CITIES
router.route("/cities")
    .get(cityController.allTheCities)
    .post(cityController.addCity);
router.route("/cities/:_id")
    .get(cityController.oneCity)
    .delete(cityController.deleteCity);

// ITINERARIES
router.route("/itineraries")
    .post(itineraryController.addItinerary)
    .get(itineraryController.getAllItineraries);
router.route("/itineraries/:_id")
    .delete(itineraryController.deleteItinerary)
    .put(itineraryController.editItinerary);
router.route("/itineraries/by_city/:idCity")
    .get(itineraryController.getItinerariesByCity);

// USERS
router.route("/user/signup")
    .post(userController.signUp)
router.route("/user/sigin")
    .post(userController.signIn)
module.exports=router