const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const cityController=require("../controllers/cityController");
const itineraryController=require("../controllers/itineraryController");
const commentController=require("../controllers/commentController");

// Manejo de /cities
router.route("/cities")
    .get(cityController.allTheCities)
    .post(cityController.addCity);

//Manejo de 1 ciudad en particular

router.route("/cities/:cityName")
    .get(cityController.singleCity)
    .delete(cityController.deleteCity);

// Manejo de todos los itineraries
router.route("/itineraries")
    .post(itineraryController.addItinerary)
    .get(itineraryController.getAllItineraries);

router.route("/itineraries/:_id")
    .delete(itineraryController.deleteItinerary)
    
router.route("/activities")
    .post(activityController.addActivity)
    .get(activityController.getActivities);

router.route("/comments")
    .post(commentController.addComment)
    .get(commentController.getComments);
    
module.exports=router