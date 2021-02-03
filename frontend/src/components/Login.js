import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const Login=({userLogIn})=>{
    const [userRegistred,setUser]=useState({userName:"",password:""})
    const inputValues=(e)=>{
        e.preventDefault();
        setUser({
            ...userRegistred,
            [e.target.name]:e.target.value
        })

    }
    const logIn=(e)=>{
        e.preventDefault();
        userLogIn(userRegistred);
    }


    return(
        <>
            <NavBar/>
            <section className="sectionLogInOut">
                <div className="logIn2" style={{ backgroundImage:'url("../public/assets/login.jpg")'  }}>
                    <h2>asd</h2>
                </div>
                <div className="logIn">
                    <h4>Log In</h4>
                    <div><AccountCircleIcon/><input type="text" placeholder="userName" name="userName" onChange={inputValues}/></div>
                    <div><LockIcon/><input type="text" placeholder="password" name="password" onChange={inputValues}/></div>
                    
                    <button onClick={logIn}>Login</button>
                </div>
            </section>
        </>
    )
}
const mapDispatchToProps={
    userLogIn: userActions.userLogIn
}
export default connect(false,mapDispatchToProps)(Login);