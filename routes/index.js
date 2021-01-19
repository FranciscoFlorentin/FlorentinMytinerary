const express=require("express");
const router = express.Router()
const citiesController=require("../controllers/citiesController");

router.route("/cities")
.get(citiesController.allTheCities)

module.exports=router