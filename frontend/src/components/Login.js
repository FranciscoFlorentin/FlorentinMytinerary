import { useState } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom"

const Login=({logIn})=>{
    const [userRegistred,setUser]=useState({userName:"",password:""})
    const [errors,setErrors]=useState([]);

    const inputValues=(e)=>{
        e.preventDefault();
        setUser({
            ...userRegistred,
            [e.target.name]:e.target.value
        })
    }
    const sendLogin= async (e)=>{
        e.preventDefault();
        if(userRegistred.userName==="" || userRegistred.password===""){
            Swal.fire(`Fill all the fields`);
            return false;
        }
        setErrors([]);
        logIn(userRegistred)
        .then(response=>{
            (response && !response.sucess)
            ?setErrors([response.response])
            :Swal.fire(`Welcome ${localStorage.getItem("name")}`)
        })
    }
    const responseGoogle= async (response)=>{
        if(response.error){
            Swal.fire({
                icon: 'error',
                text: 'Something went wrong, try later!'
              })
        }else{
            logIn({
                userName: response.profileObj.email,
                password: response.profileObj.googleId
            })
            .then(response1=>{
            (response1 && !response1.sucess)
            ?setErrors([response1.response])
            :Swal.fire(`Welcome ${response.profileObj.givenName.split(" ").slice(0,-1).join(" ")}`)
        })

        }
    }
    return(
        <>
            <NavBar/>
            <div className="register" >
                
                <div className="loginForm" >
                    <h2>Log In</h2>
                    <div><input type="text" placeholder="username" name="userName" onChange={inputValues}/></div>
                    <div><input type="password" placeholder="password" name="password" onChange={inputValues}/></div>
                    
                    <button onClick={sendLogin}>Login</button>
                    <GoogleLogin
                            clientId= "185568068022-l55ir1g6dst91vrc9l497j28jflnaoqp.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                    />
                    <div className="errorsDiv">{errors.map(error=><p>{error}</p>)}</div>             
                    <div><Link to="/register"><p>Don't have an account yet?  Sign Up</p></Link></div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps={
    logIn: userActions.logIn
}
export default connect(null,mapDispatchToProps)(Login);