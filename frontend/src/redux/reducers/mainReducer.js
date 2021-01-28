import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";

const mainReducer=combineReducers({
    city: cityReducer,
    itinerary: itineraryReducer
})

export default mainReducer;