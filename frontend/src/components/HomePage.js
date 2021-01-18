import Carousel from "./Carousel"
import Logo from "./Logo";
import CallToAction from "./CallToAction"
const HomePage=()=>{
    return (
        <section className="container" >
            <Logo />
            <CallToAction />
            <Carousel />
        </section>
    )
}

export default HomePage;