import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

const Login=()=>{
    
    return(
        <>
            <NavBar/>
            <section className="sectionLogInOut">
                <div className="logIn2" style={{ backgroundImage:'url("../public/assets/login.jpg")'  }}>
                    <h2>asd</h2>
                </div>
                <div className="logIn">
                    <h4>Log In</h4>
                    <div><AccountCircleIcon/><input type="text" placeholder="username"/></div>
                    <div><LockIcon/><input type="text" placeholder="password"/></div>
                    
                    <button>Login</button>
                </div>
            </section>
        </>
    )
}
export default Login;