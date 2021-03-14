import NavBar from "./NavBar"
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <>
            <header style={{height:"50vh", backgroundImage: 'url("../assets/1.jpg")',
            backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"45%"}}>
                <NavBar />
                <div id="headerDiv">
                    <h1>WELCOME TO MYTINERARY</h1>
                    <div>
                        <h3>THE PLACE TO GET THE LATEST</h3>
                        <h3>NEW OF TRAVEL ITINERARIES</h3>
                    </div>
                    <h2>SIGN UP</h2>
                </div>  
          
            </header>
        </>
    )
}

export default Header;