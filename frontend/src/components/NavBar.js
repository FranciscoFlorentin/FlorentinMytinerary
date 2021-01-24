import {NavLink} from "react-router-dom";
const NavBar= () =>{
    return(
    <>
        <div className="divHeader">
            <div>
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