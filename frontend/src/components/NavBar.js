import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import userActions from "../redux/actions/userActions";
import Hamburger from 'hamburger-react';
import { useState } from "react";

const NavBar= ({loggedUser,logOut}) =>{
    const [isOpen, setOpen] = useState(false);

    return(
    <>
        <div className="divHeader">
            <div id="logoTitulo">
                <div className="logo" style={{backgroundImage:'url("./assets/1.png")'}}></div>
                <div id="titulo"> 
                    <Link to="/"><h1 className="tituloLogo">MYtinerary</h1></Link>
                </div>
            </div>
            <div className="headerUserPic">
                {loggedUser && <div className="fotoUsuario" 
                    style={{backgroundImage:`url("${loggedUser.pic}")`}}></div>}
                {loggedUser===null && <div className="fotoUsuario" 
                    style={{backgroundImage: 'url("../assets/no-usuario.png")'}}></div>}
            </div>
            <nav id="nav1">
                <ul>
                    <NavLink exact to="/"><p>Home</p></NavLink>
                    <NavLink to="/cities"><p>Cities</p></NavLink>
                    {/* LINKS A MOSTRAR SEGUN USUARIO LOGUEADO */}
                    {loggedUser===null
                    ?<><NavLink to="/logIn"><p>Log In</p></NavLink>
                        <NavLink to="/register"><p>Sign Up</p></NavLink></>
                    :<Link to="#" onClick={logOut}><p>Log Out</p></Link>}
                </ul>
            </nav>
            <nav id="nav2">
                <Hamburger toggled={isOpen} toggle={setOpen} direction="right" easing="ease-in"/>
            </nav>
            
        </div>
        {isOpen&& 
            <div id="nav3">
                <div id="nav4">
                    <div className="headerUserPic1">
                        {loggedUser && <div className="fotoUsuario" 
                            style={{backgroundImage:`url("${loggedUser.pic}")`}}></div>}
                        {loggedUser===null && <div className="fotoUsuario" 
                            style={{backgroundImage: 'url("../assets/no-usuario.png")'}}></div>}
                    </div>
                    <nav id="nav1Responsive">
                        <ul>
                            <NavLink exact to="/"><p>Home</p></NavLink>
                            <NavLink to="/cities"><p>Cities</p></NavLink>
                            {/* LINKS A MOSTRAR SEGUN USUARIO LOGUEADO */}
                            {loggedUser===null
                            ?<><NavLink to="/logIn"><p>Log In</p></NavLink>
                                <NavLink to="/register"><p>Sign Up</p></NavLink></>
                            :<Link to="#" onClick={logOut}><p>Log Out</p></Link>}
                        </ul>
                    </nav>
                </div>
            </div>}
    
    </>
    )
}
const mapStateToProps=(state)=>{
    return {
      loggedUser:state.userReducer.loggedUser
    }
}
const mapDispatchToProps={
    logOut:userActions.logOut
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);