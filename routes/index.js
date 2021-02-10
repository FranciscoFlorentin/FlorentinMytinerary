const express = require("express");
const router = express.Router();
const cityController=require("../controllers/cityController");
const itineraryController=require("../controllers/itineraryController");
const userController=require("../controllers/userController");
const validator=require("../controllers/validator");
const passport= require("passport");
require("../config/passport");

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
// router.route("/itinerary/one/:_id")
//     .get(itineraryController.itinerary)
router.route("/itinerary/likes/:_id")
    .put(passport.authenticate("jwt",{session:false}),itineraryController.itineraryLikes)
router.route("/itinerary/addComment/:_id")
    .put(passport.authenticate("jwt",{session:false}),itineraryController.addComment)
router.route("/itinerary/deleteComment/:_id")
    .put(passport.authenticate("jwt",{session:false}),itineraryController.deleteComment)
router.route("/itinerary/editComment/:_id")
    .put(passport.authenticate("jwt",{session:false}),itineraryController.editComment)    
// USER
router.route("/user/register")
    .post(validator.validateNewAccount,userController.register)
router.route("/user/login")
    .post(userController.logIn)
router.route("/user/loginLS")
    .post(passport.authenticate("jwt",{session:false}),userController.logInLS)

module.exports=router