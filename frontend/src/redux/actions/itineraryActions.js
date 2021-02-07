import axios from "axios";
import Swal from 'sweetalert2';

const itineraryActions ={
    getItinerariesByCityId: (cityId)=>{
        return async (dispatch,getState)=>{
            axios.get(`http://localhost:4000/api/itineraries/by_city/${cityId}`)
            .then(data=>dispatch({type: "ITINERARIES_BY_CITY",payload: data.data.response}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            }))
        }
    },
    itineraryLike:(itineraryId)=>{
        return async(dispatch,getState)=>{
            axios.get(`http://localhost:4000/api/itineraries/by_city/${cityId}`)
            .then(data=>dispatch({type: "ITINERARIES_BY_CITY",payload: data.data.response}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            }))
        }
    }
}
export default itineraryActions;