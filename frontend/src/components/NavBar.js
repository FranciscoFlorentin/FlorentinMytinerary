import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import userActions from "../redux/actions/userActions";

const NavBar= ({loggedUser,logOut}) =>{

    return(
    <>
        <div className="divHeader">
            <div className="logInOut">
                {/* LINKS A MOSTRAR SEGUN USUARIO LOGUEADO */}
                {loggedUser===null
                ?<><Link to="/logIn"><h6>Log In</h6></Link><Link to="/register"><h6>Sign Up</h6></Link></>
                :<><Link to="#" onClick={logOut}><h6>Log Out</h6></Link></>}
            </div>
            <div className="headerUserPic">

                {loggedUser && <div className="fotoUsuario" style={{backgroundImage:`url(${loggedUser.userPic})`}}></div>}
                {!loggedUser && <div className="fotoUsuario" style={{backgroundImage: 'url("../assets/no-usuario.png")'}}></div>}
            </div>
            <nav id="nav1">
                <ul>
                    <NavLink exact to="/"><p>Home</p></NavLink>
                    <NavLink to="/cities"><p>Cities</p></NavLink>
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