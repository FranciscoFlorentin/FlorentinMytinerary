import axios from "axios";

const cityActions ={
    getCities: ()=>{
        return async (dispatch,getState)=>{
            const data= await axios.get("http://localhost:4000/api/cities");
            dispatch({
                type: "ALL_CITIES",
                payload: data.data.response
            });
        }
    },
    getFilteredCities:(inputValue)=>{
        return async (dispatch,getState)=>dispatch({
            type: "FILTERED_CITIES", 
            // Obtengo el estado de "cities" del store con getState, lo filtro y lo envio a cityReducer
            payload: (getState().cityReducer.cities)
                    .filter(city=> city.cityName.toUpperCase().indexOf(inputValue.toUpperCase().trim())===0)});
    }

}
export default cityActions;