const express = require("express");
const router = express.Router();
const cityController=require("../controllers/cityController");
const itineraryController=require("../controllers/itineraryController");
const userController=require("../controllers/userController");
const validator=require("../controllers/validator");

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

// USER
router.route("/user/register")
    .post(validator.validateNewAccount,userController.register)
router.route("/user/login")
    .post(userController.logIn)

module.exports=router