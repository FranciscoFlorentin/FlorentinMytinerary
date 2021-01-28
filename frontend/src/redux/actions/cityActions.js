import axios from "axios";

const cityActions ={
    getCities: ()=>{
        return async (dispatch,getState)=>{
            const data= await axios.get("http://localhost:4000/api/cities");
            dispatch({type: "ALL_CITIES",payload: data.data.response});
        }
    }
}
export default cityActions;