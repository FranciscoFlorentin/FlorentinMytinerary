import axios from "axios";

const itineraryActions ={
    getItineraries: (cityId)=>{
        return async (dispatch,getState)=>{
            const data= await axios.get(`http://localhost:4000/api/itineraries/${cityId}`);
            dispatch({type: "ITINERARIES_BY_CITY",payload: data.data.response});
        }
    }
}
export default itineraryActions;