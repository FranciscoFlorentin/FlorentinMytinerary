import axios from "axios";
import Swal from 'sweetalert2';

const activityActions ={
    getActivitiesByIdItinerary: (idItinerary)=>{
        return async (dispatch,getState)=>{
            axios.get(`http://localhost:4000/api/activities/${idItinerary}`)
            .then(data=>dispatch({type: "ACTIVITIES_BY_ITINERARY",payload: data.data.response}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              }))
        }
    }
}
export default activityActions;