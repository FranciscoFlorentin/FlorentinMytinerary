import axios from "axios";

const itineraryActions ={
    getItineraries: ()=>{
        return async (dispatch,getState)=>{
            const data= await axios.get("http://localhost:4000/api/itineraries");
            dispatch({type: "ALL_ITINERARIES",payload: data.data.response});
        }
    }
}
export default itineraryActions;