import Carousel from "./Carousel"
import Logo from "./Logo";
import CallToAction from "./CallToAction"
import Header from "./Header"
import {useEffect} from "react"
const HomePage=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <Header/>
            <section className="container" >
                <CallToAction />
                <Carousel />
            </section>
        </>
    )
}

export default HomePage;