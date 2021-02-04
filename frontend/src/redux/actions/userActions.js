import axios from "axios";

const userActions={
    userRegister:(newUser)=>{
        return async (dispatch,getState)=>{
            const response=await axios.post("http://localhost:4000/api/user/register",newUser)
            if(!response.data.sucess){
                return response.data
            }
            dispatch({type:"LOG_IN", payload: response.data})
            
            
            // axios.post("http://localhost:4000/api/user/register",newUser)
            // .then(response=>{
            //     if(!response.data.sucess){return response.data}
            //     dispatch({type:"LOG_IN",payload:response.data})
            // })
        }
    },
    logIn:(userRegistred)=>{
        return async (dispatch,getState)=>{
            const response = await axios.post("http://localhost:4000/api/user/login",userRegistred)
            if(response && !response.data.sucess){
                return response.data
            }
            dispatch({type:"LOG_IN",payload:response.data})}
            
        
    },
    logOut:()=>{
        return (dispatch, getState)=>{
            dispatch({type:"LOG_OUT"})
        }
    }
}
export default userActions;