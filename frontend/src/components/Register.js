import React from 'react'
import NavBar from './NavBar';
import {useState,useEffect} from "react";
import axios from "axios";
import Loader from './Loader';
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Register = ({userRegister}) => {
    const[countries,setCountries]=useState([]);
    const[errors,setErrors]=useState([]);
    const[newUser,setNewUser]=useState({userName:"",firstName:"",password:"",lastName:"",
    userPic:"",countryName:"",countryPic:"",googleUser:false});
    useEffect( () => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(data=>setCountries(data.data))
        .catch(error=>Swal.fire({
            icon: 'error',
            text: 'Something went wrong, try later!'
          }))
    }, [])

    const inputValues=(e)=>{
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }
    const sendNewUser= async (e)=>{
        e.preventDefault();
        if(newUser.userName===""|| newUser.password==="" || newUser.firstName==="" 
        || newUser.lastName==="" || newUser.userPic==="" || newUser.countryName===""){
            
            Swal.fire(`Fill all the fields`)
             
            return false;
        }
        var countryPic1= countries.find(country=>country.name===newUser.countryName).flag;
        newUser.countryPic=countryPic1;
        setErrors([]);
        
        const response = await userRegister(newUser);
        if (response && !response.sucess){
            setErrors([response.errors])
        }else{
            Swal.fire(`Welcome ${newUser.firstName}`)
        }
        
    }
    const responseGoogle = async(response) => {
        if(response.error){
            Swal.fire({
                icon: 'error',
                text: 'Something went wrong, try later!'
              })
        }else{
            const response1 = await userRegister({
                userName:response.profileObj.email,
                firstName:response.profileObj.givenName.split(" ").slice(0,-1).join(" "),
                password:response.profileObj.googleId,
                lastName:response.profileObj.givenName.split(" ").slice(-1).join(" "),
                userPic:response.profileObj.imageUrl,
                countryName:"default",
                countryPic:"default.jpg",
                googleUser:true
            })
            if (response1 && !response1.sucess){
                setErrors([response1.errors])
            }else{
                Swal.fire(`Welcome ${localStorage.getItem("name")}`)
            }
        }
      }
    if(countries.length===0){return <> <NavBar/><Loader/> </>}
    console.log(errors)
    return (
        <>

        <NavBar/>
            <div className="register" >
                <div className="registerForm" >
                        <h2>Sign Up</h2>
                        <div><input type="text" placeholder="Username" name="userName" onChange={inputValues}/></div>
                        <div><input type="password" placeholder="Password" name="password" onChange={inputValues}/></div>
                        <div><input type="text" placeholder="First Name" name="firstName" onChange={inputValues}/></div>
                        <div><input type="text" placeholder="Last Name" name="lastName" onChange={inputValues}/></div>
                        <div><input type="url" placeholder="Url img" name="userPic" onChange={inputValues}/></div>
                        <div><select name="countryName" id="" onChange={inputValues}>
                                <option value="" selected disabled >Country</option>
                                {countries.map(country=>{
                                    return <option value={country.name}>{country.name}</option>})
                                }
                            </select>
                        </div>
                        <button onClick={sendNewUser}>Create Account</button>
                    <GoogleLogin
                        clientId= "409520969344-3dls3cu2s3e5magt3ipi9j8in4du56kd.apps.googleusercontent.com"
                        buttonText="Create Account with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <div className="errorsDiv">{errors.map(error=><p>{error}</p>)}</div>
                    <div><Link to="/login"><p>You have account?  Log In</p></Link></div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps={
    userRegister:userActions.userRegister
}
export default connect(null,mapDispatchToProps)(Register);
