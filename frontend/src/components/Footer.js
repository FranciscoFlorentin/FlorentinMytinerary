import { ImFacebook2,ImTwitter,ImLinkedin,ImTelegram } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import {NavLink } from 'react-router-dom';
import { IconContext } from "react-icons/lib";

const Footer=()=>{
    return (
        <>
            <footer>
                <div style={{width:"100%"}}>
                    <div className="footerDiv0"> 
                        <div className="footerDiv1">
                            
                            <div className="navFooter">
                                <NavLink exact to="/" style={{color:"black"}}>
                                    <div>
                                        <p>Home</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/cities" style={{color:"black"}}>
                                    <div>
                                        <p>Cities</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="footerDiv1">
                            <div className="footerRedes">
                                <IconContext.Provider value={{ color: "#2dc0da",
                                size:"2rem", className: "iconosFooter" }} >
                                    <ImFacebook2/><ImTwitter />
                                    <ImLinkedin/><FiInstagram /><ImTelegram />
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerText">
                    <p>Copyright © 2021 MYtinerary. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;