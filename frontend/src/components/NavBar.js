import {Link, NavLink} from "react-router-dom";
const NavBar= () =>{
    return(
    <>
        <div className="divHeader">
            <div className="logInOut">
                <Link to="/logIn"><h6>Log In</h6></Link>
                <Link to="/logUp"><h6>Log Up</h6></Link>
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
export default NavBar;