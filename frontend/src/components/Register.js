import React from 'react'
import NavBar from './NavBar';
import {useState,useEffect} from "react";
import axios from "axios";
import Loader from './Loader';
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ImageIcon from '@material-ui/icons/Image';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';

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
    return (
        <>

        <NavBar/>
            <section className="sectionLogInOut">
                <div className="logIn2" style={{ backgroundImage:'url("../assets/login.jpg")'  }}>
                    <div className="errorsDiv">{errors.map(error=><p>{error}</p> ) }</div>

                        <GoogleLogin
                            clientId= "185568068022-l55ir1g6dst91vrc9l497j28jflnaoqp.apps.googleusercontent.com"
                            buttonText="Create Account with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                </div>
                <div className="logIn">
                    <h4>Sign Up</h4>
                    <div><AccountCircleIcon/><input type="text" placeholder="Username" name="userName" onChange={inputValues}/></div>
                    <div><LockIcon/><input type="password" placeholder="Password" name="password" onChange={inputValues}/></div>
                    <div><RecentActorsIcon/><input type="text" placeholder="First Name" name="firstName" onChange={inputValues}/></div>
                    <div><RecentActorsIcon/><input type="text" placeholder="Last Name" name="lastName" onChange={inputValues}/></div>
                    <div><ImageIcon/><input type="url" placeholder="Url img" name="userPic" onChange={inputValues}/></div>
                    <select name="countryName" id="" onChange={inputValues}>
                            <option value="" selected disabled >Country</option>
                            {countries.map(country=>{
                                return <option value={country.name}>{country.name}</option>})
                            }
                        </select>
                    <button onClick={sendNewUser}>Create Account</button>
                </div>
            </section>
        </>
    )
}

const mapDispatchToProps={
    userRegister:userActions.userRegister
}
export default connect(null,mapDispatchToProps)(Register);
