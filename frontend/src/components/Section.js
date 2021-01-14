import Carousel from "./Carousel"
import Logo from "./Logo";
import CallToAction from "./CallToAction"
const Section=()=>{
    return (
        <section className="container" >
            <Logo />
            <CallToAction />
            <Carousel />
        </section>
    )
}

export default Section;