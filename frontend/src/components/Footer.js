    
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

import { Link } from 'react-router-dom';
const Footer=()=>{
    return (
        <>
            <footer>
                <div>
                    <div className="footerDiv0"> 
                        <div className="footerDiv1">
                            
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
                            <div className="footerRedes"><FacebookIcon /><TwitterIcon />
                            <LinkedInIcon   /><InstagramIcon /><TelegramIcon /></div>
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