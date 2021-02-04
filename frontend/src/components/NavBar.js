import { connect } from "react-redux";
import {Link, NavLink} from "react-router-dom";
import userActions from "../redux/actions/userActions";

const NavBar= ({loggedUser,logOut}) =>{

    if(loggedUser===null){ 
        var linksToShow=<>
            <Link to="/logIn"><h6>Log In</h6></Link><Link to="/register"><h6>Sign Up</h6></Link>
        </>
    }else{
        var linksToShow=<>
            <Link to="#" onClick={logOut}><h6>Log Out</h6></Link>
        </>
    }
    return(
    <>
        <div className="divHeader">
            <div className="logInOut">
                {linksToShow}
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
const mapDispatchToProps={
    logOut:userActions.logOut
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);