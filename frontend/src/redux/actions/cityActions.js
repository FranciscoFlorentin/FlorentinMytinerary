import axios from "axios";
import Swal from 'sweetalert2';

const cityActions ={

    getCities: ()=>{
        return async (dispatch,getState)=>{
            axios.get("http://localhost:4000/api/cities")
            .then(data=>dispatch({type: "ALL_CITIES",payload: data.data.response}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              }))
        }
    },
    getOneCity: (cityId)=>{
        return async (dispatch,getState)=>{
            dispatch({type:"ONE_CITY",payload: cityId})
        }
    },
    getFilterCities:(inputValue)=>{
        return async (dispatch,getState)=>dispatch({type: "FILTERED_CITIES", payload:inputValue})
    },
    addCity: (newCity)=>{
        return async(dispatch,getState)=>{
            axios.post("http://localhost:4000/api/cities",newCity)
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