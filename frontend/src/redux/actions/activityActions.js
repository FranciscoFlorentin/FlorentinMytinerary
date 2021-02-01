import axios from "axios";

const activityActions ={
    getActivitiesByIdItinerary: (idItinerary)=>{
        return async (dispatch,getState)=>{
            axios.get(`http://localhost:4000/api/activities/${idItinerary}`)
            .then(data=>dispatch({type: "ACTIVITIES_BY_ITINERARY",payload: data.data.response}))
            .catch(error=>alert(error))
        }
    }
}
export default activityActions;