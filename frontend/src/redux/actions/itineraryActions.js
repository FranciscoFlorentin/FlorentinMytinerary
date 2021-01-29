import axios from "axios";

const itineraryActions ={
    getItinerariesByCityId: (cityId)=>{
        return async (dispatch,getState)=>{
            const data= await axios.get(`http://localhost:4000/api/itineraries/by_city/${cityId}`);
            dispatch({type: "ITINERARIES_BY_CITY",payload: data.data.response});
        }
    }
}
export default itineraryActions;