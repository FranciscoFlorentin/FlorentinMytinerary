import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
const NavBar= ({loggedUser}) =>{
    return(
    <>
        <div className="divHeader">
            <div className="logInOut">
                {loggedUser===false 
                ?<><Link to="/logIn"><h6>Log In</h6></Link>
                 <Link to="/register"><h6>Sign Up</h6></Link></>
                : <Link to="/"><h6>Log Out</h6></Link>}
            </div>
            <div className="headerUserPic">
                <img className="fotoUsuario" alt="" src="../assets/usuario.png"></img>
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
export default connect(mapStateToProps)(NavBar);