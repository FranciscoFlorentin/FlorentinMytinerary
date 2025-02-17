import axios from "axios";
import Swal from 'sweetalert2';

const cityActions ={

    getCities: ()=>{
        return async (dispatch,getState)=>{
            axios.get("https://mytinerary-florentin.herokuapp.com/api/cities")
            .then(data=>dispatch({type: "ALL_CITIES",payload: data.data.response}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              }))
        }
    },
    getFilterCities:(inputValue)=>{
        return async (dispatch,getState)=>dispatch({type: "FILTERED_CITIES", payload:inputValue})
    },
    addCity: (newCity)=>{
        return async(dispatch,getState)=>{
            axios.post("https://mytinerary-florentin.herokuapp.com/api/cities",newCity)
            .then(data=>dispatch({type:"ADD_CITY",payload: data.data.sucess}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              }))
        }
    }
}
export default cityActions;