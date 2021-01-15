import React from 'react'
import {Link} from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
const CallToAction = () => {
    return (
        <div className="divCall1">
            <div className="divCall2">
                <Link to="/cities"><button className="botonCall"><h6>Discover more Itineraries</h6><MenuBookIcon color="primary" /></button></Link>
            </div>
            <div style={{width:"50%",backgroundImage:"url('./assets/Screenshot_2.png')",
                backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPositionX:"80%"}}>
            </div>
        </div>
    )
}
export default CallToAction;