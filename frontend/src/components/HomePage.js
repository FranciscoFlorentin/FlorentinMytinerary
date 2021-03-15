import Carousel from "./Carousel"
import {useEffect} from "react"
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const HomePage=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>  
            <header style={{height:"50vh", backgroundImage: 'url("../assets/Balooning-in-Cappadocia-1.jpg")',
            backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"45%"}}>
                <NavBar/>
                <div id="headerDiv">
                    <div id="callToAction">
                        <Link to="/cities"><h2>EXPLORE CITIES</h2></Link>
                    </div>
                </div>      
            </header>
            <section className="container" >
                <Carousel />
            </section>
        </>
    )
}

export default HomePage;