import axios from "axios";

const itineraryActions ={
    getItinerariesByCityId: (cityId)=>{
        return async (dispatch,getState)=>{
            axios.get(`http://localhost:4000/api/itineraries/by_city/${cityId}`)
            .then(data=>dispatch({type: "ITINERARIES_BY_CITY",payload: data.data.response}))
            .catch(error=>alert(error))
        }
    }
}
export default itineraryActions;