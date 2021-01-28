const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const cityController=require("../controllers/cityController");
const itineraryController=require("../controllers/itineraryController");
const commentController=require("../controllers/commentController");

// CITIES
router.route("/cities")
    .get(cityController.allTheCities)
    .post(cityController.addCity);
router.route("/cities/:cityName")
    .get(cityController.singleCity)
    .delete(cityController.deleteCity);

// ITINERARIES
router.route("/itineraries")
    .post(itineraryController.addItinerary)
    .get(itineraryController.getAllItineraries);

router.route("/itineraries/:_id")
    .delete(itineraryController.deleteItinerary)
    .put(itineraryController.editItinerary)

// ACTIVITIES
router.route("/activities")
    .post(activityController.addActivity)
    .get(activityController.getActivities);

// COMMENTS
router.route("/comments")
    .post(commentController.addComment)
    .get(commentController.getComments);
    
module.exports=router