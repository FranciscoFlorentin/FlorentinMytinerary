import axios from "axios";

const cityActions ={
    getCities: ()=>{
        return async (dispatch,getState)=>{
            const data= await axios.get("http://localhost:4000/api/cities");
            dispatch({type: "ALL_CITIES",payload: data.data.response});
        }
    },
    getFilteredCities:(cities,inputValue)=>{
        return (dispatch,getState)=>dispatch({
            type: "FILTERED_CITIES", 
            payload: cities.filter(city=> city.cityName.toUpperCase().indexOf(inputValue.toUpperCase().trim())===0)
        })
    }
}
export default cityActions;