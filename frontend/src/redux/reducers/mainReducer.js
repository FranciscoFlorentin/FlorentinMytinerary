import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import userReducer from "./userReducer";
import itineraryReducer from "./itineraryReducer";

const mainReducer=combineReducers({
    cityReducer,
    itineraryReducer,
    userReducer
})

export default mainReducer;