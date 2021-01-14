import React from 'react'
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const CallToAction = () => {
    return (
        <div className="divCall">
            <Link><button className="botonCall"><h6>Discover more Itineraries</h6><ArrowForwardIcon color="primary" /></button></Link>
        </div>
    )
}
export default CallToAction;