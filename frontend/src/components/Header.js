import NavBar from "./NavBar"
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <>
            <header style={{height:"50vh", backgroundImage: 'url("../assets/1.jpg")',
            backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"45%"}}>
                <NavBar />
                <h1><Link to="/cities" style={{color:"white"}}>Explore and discover cities here</Link> </h1>
          
            </header>
        </>
    )
}

export default Header;