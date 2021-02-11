import React from 'react'
import NavBar from './NavBar';
import {useState,useEffect} from "react";
import axios from "axios";
import Loader from './Loader';
import {connect} from "react-redux";
import userActions from "../redux/actions/userActions";

const Register = ({userRegister}) => {
    const[countries,setCountries]=useState([]);
    const[errors,setErrors]=useState([]);
    const[newUser,setNewUser]=useState({userName:"",firstName:"",password:"",lastName:"",
    userPic:"",countryName:"",countryPic:""});
    useEffect( () => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(data=>setCountries(data.data))
        .catch(error=>console.log(error))
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
        if(newUser.userName==="" || newUser.password==="" || newUser.firstName==="" 
        || newUser.lastName==="" || newUser.userPic==="" || newUser.countryName===""){
            alert("Fill all the fields"); 
            return false;
        }
        var countryPic1= countries.find(country=>country.name===newUser.countryName).flag;
        newUser.countryPic=countryPic1;
        setErrors([]);
        // setNewUser({...newUser});
        // userRegister(newUser)
        // .then(response=>{
        //     (response && !response.sucess)
        //     ?setErrors([response.errors])
        //     :alert(`WELCOME ${loggedUser.userName}`)
        // })
        
        const response = await userRegister(newUser);
        if (response && !response.sucess){
            setErrors([response.errors])
        }else{
            alert(`WELCOME`)
        }
        console.log(response)
        
    }

    if(countries.length===0){return <> <NavBar/><Loader/> </>}
    return (
        <>

        <NavBar/>
            <section className="sectionLogInOut">
                <div className="logIn2" style={{ backgroundImage:'url("../public/assets/login.jpg")'  }}>
                    <div>{errors.map(error=><p>{error}</p> ) }</div>
                </div>
                <div className="logIn">
                    <h4>Sign Up</h4>
                    <div><input type="text" placeholder="Username" name="userName" onChange={inputValues}/></div>
                    <div><input type="password" placeholder="Password" name="password" onChange={inputValues}/></div>
                    <div><input type="text" placeholder="First Name" name="firstName" onChange={inputValues}/></div>
                    <div><input type="text" placeholder="Last Name" name="lastName" onChange={inputValues}/></div>
                    <div><input type="url" placeholder="Url img" name="userPic" onChange={inputValues}/></div>
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
