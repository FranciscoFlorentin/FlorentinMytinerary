import DehazeIcon from '@material-ui/icons/Dehaze';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import ForumIcon from '@material-ui/icons/Forum';
import { Link } from 'react-router-dom';
const Footer=()=>{
    return (
        <>
            <footer>
                <div>
                    <div className="footerDiv0"> 
                        <div className="footerDiv1">
                            <div><DehazeIcon /></div>
                            <p>Links</p>
                            <div className="navFooter">
                                <Link to="/" style={{color:"black"}}>
                                    <div>
                                        <p>Home</p>
                                    </div>
                                </Link>
                                <Link to="/cities" style={{color:"black"}}>
                                    <div>
                                        <p>Cities</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="footerDiv1">
                            <div><ForumIcon/></div>
                            <p>Social</p>
                            <div className="footerRedes"><FacebookIcon color="primary" /><TwitterIcon color="primary"/>
                            <LinkedInIcon color="primary"/><InstagramIcon color="primary"/><TelegramIcon color="primary"/></div>
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