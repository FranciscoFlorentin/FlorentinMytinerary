import {NavLink} from "react-router-dom";
const NavBar= () =>{
    return(
        <nav id="nav1">
            <ul>
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/cities"><p>Cities</p></NavLink>
            </ul>
        </nav>
    )
}
export default NavBar;