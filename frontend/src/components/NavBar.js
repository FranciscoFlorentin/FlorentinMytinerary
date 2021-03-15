import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import userActions from "../redux/actions/userActions";
const NavBar= ({loggedUser,logOut}) =>{
    
    return(
    <>
        <div className="divHeader">
            <div id="logoTitulo">
                <div className="logo" style={{backgroundImage:'url("./assets/1.png")'}}></div>
                <div id="titulo"> 
                    <h1 className="tituloLogo">MYtinerary</h1>
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
                    :<NavLink to="#" onClick={logOut}><p>Log Out</p></NavLink>}
                </ul>
            </nav>
        </div>
        
    
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