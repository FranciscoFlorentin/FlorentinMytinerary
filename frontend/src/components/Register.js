import React from 'react'
import NavBar from './NavBar';
import {useState,useEffect} from "react";
import axios from "axios";
import Loader from './Loader';
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";

const Register = ({loggedUser,userRegister}) => {
    const[countries,setCountries]=useState([]);
    const[newUser,setNewUser]=useState({userName:"",firstName:"",password:"",lastName:"",
    userPic:"",countryName:"",countryPic:""});
    useEffect( () => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(data=>setCountries(data.data))
        .catch(error=>console.log(error))
    }, [])
    if(countries.length===0){return <> <NavBar/><Loader/> </>}
    
    const inputValues=(e)=>{
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }
    const sendNewUser=(e)=>{
        e.preventDefault();
        var countryPic1=countries.find(x=>x.name===newUser.countryName).flag;
        setNewUser({...newUser,countryPic:countryPic1});
        userRegister(newUser)
    }
    console.log(loggedUser)
    return (
        <>

        <NavBar/>
            <section className="sectionLogInOut">
                <div className="logIn2" style={{ backgroundImage:'url("../public/assets/login.jpg")'  }}>
                    <h2>asd</h2>
                </div>
                <div className="logIn">
                    <h4>Log In</h4>
                    <div><input type="text" placeholder="Username" name="userName" onChange={inputValues}/></div>
                    <div><input type="password" placeholder="Password" name="password" onChange={inputValues}/></div>
                    <div><input type="text" placeholder="First Name" name="firstName" onChange={inputValues}/></div>
                    <div><input type="text" placeholder="Last Name" name="lastName" onChange={inputValues}/></div>
                    <div><input type="url" placeholder="url img" name="userPic" onChange={inputValues}/></div>
                    <div><select name="countryName" id="" onChange={inputValues}>
                            <option value="" selected disabled >Country</option>
                            {countries.map(country=>{
                                return <option value={country.name}>{country.name}</option>})
                            }
                        </select>
                    </div>
                    
                    <button onClick={sendNewUser}>Create Account</button>
                </div>
            </section>
        </>
    )
}
const mapStateToProps=state=>{
    return {
        loggedUser:state.userReducer.loggedUser
    }
}
const mapDispatchToProps={
    userRegister:userActions.userRegister
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);
