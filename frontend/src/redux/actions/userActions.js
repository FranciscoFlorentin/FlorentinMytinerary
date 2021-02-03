import axios from "axios";
import Swal from "sweetalert2"

const userActions={
    userRegister:(newUser)=>{
        return async (dispatch,getState)=>{
            axios.post("http://localhost:4000/api/user/register",newUser)
            .then(newUser=>{dispatch({type:"NEW_USER",payload:newUser.data})})
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              }))
        }
    },
    userLogIn:(userRegistred)=>{
        return async (dispatch,getState)=>{
            axios.post("http://localhost:4000/api/user/login",userRegistred)
            .then(userRegistred=>{dispatch({type:"LOGIN",payload:userRegistred.data})})
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              }))
        }
    }
}
export default userActions;