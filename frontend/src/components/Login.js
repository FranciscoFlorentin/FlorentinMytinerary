import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const Login=({logIn, loggedUser})=>{
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
            alert("fill all the fields");
            return false;
        }
        setErrors([]);
        logIn(userRegistred)
        .then(response=>{
            (response && !response.sucess)
            ?setErrors([response.response])
            :alert("WELCOME")
        })

    }
    return(
        <>
            <NavBar/>
            <section className="sectionLogInOut">
                <div className="logIn2" style={{ backgroundImage:'url("../public/assets/login.jpg")'  }}>
                    <div>{errors.map(error=><h5>{error}</h5>)}</div>
                </div>
                <div className="logIn">
                    <h4>Log In</h4>
                    <div><AccountCircleIcon/><input type="text" placeholder="userName" name="userName" onChange={inputValues}/></div>
                    <div><LockIcon/><input type="password" placeholder="password" name="password" onChange={inputValues}/></div>
                    
                    <button onClick={sendLogin}>Login</button>
                </div>
            </section>
        </>
    )
}
const mapStateToProps=state=>{
    return{
        loggedUser:state.userReducer.loggedUser 
    }
}
const mapDispatchToProps={
    logIn: userActions.logIn
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);