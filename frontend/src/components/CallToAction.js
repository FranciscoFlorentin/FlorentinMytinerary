import React from 'react'
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const CallToAction = () => {
    return (
        <div className="divCall1">
            <div className="divCall2">
                <Link><button className="botonCall"><h6>Discover more Itineraries</h6><ArrowForwardIcon color="primary" /></button></Link>
            </div>
            <div style={{width:"50%",backgroundImage:"url('./assets/Screenshot_2.png')",
                backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPositionX:"80%"}}>
            </div>
        </div>
    )
}
export default CallToAction;