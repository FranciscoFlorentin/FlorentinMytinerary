import axios from "axios";

const cityActions ={

    getCities: ()=>{
        return async (dispatch,getState)=>{
            axios.get("http://localhost:4000/api/cities")
            .then(data=>dispatch({type: "ALL_CITIES",payload: data.data.response}))
            .catch(error=>alert(error))
        }
    },
    getOneCity: (cityId)=>{
        return async (dispatch,getState)=>{
            dispatch({type:"ONE_CITY",payload: cityId})
        }
    },
    cleanCity: ()=>{
        return async (dispatch,getState)=>{
            dispatch({type:"CLEAN_CITY"})
        }
    },
    getFilterCities:(inputValue)=>{
        return async (dispatch,getState)=>dispatch({type: "FILTERED_CITIES", payload:inputValue})
    }
}
export default cityActions;