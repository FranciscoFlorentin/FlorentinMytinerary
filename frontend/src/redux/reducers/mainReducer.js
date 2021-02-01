import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";

const mainReducer=combineReducers({
    cityReducer,
    itineraryReducer,
    activityReducer
})

export default mainReducer;