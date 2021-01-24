import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react'
import {Link} from "react-router-dom";
const CallToAction = () => {
    return (
        <div className="divCall1" style={{backgroundImage:"url('../assets/travelers.jpg')"}}>
            <div>
                <h2>Don't be a tourist,</h2>
            </div>
            <div>
                <h2>be a traveler.</h2>
            </div> 
            <div>
                <p>Travel for all the cities of the world,</p>
                <p>you can find the best travel itineraries here.</p>
            </div>
            <div>
                <div className="divBotonCallToAction">
                    <ArrowForwardIcon style={{color:"orange"}}/>
                    <Link to="/cities"><button>Explore Cities</button></Link>
                    <ArrowBackIcon style={{color:"orange"}}/>
                </div>
            </div>
        </div>
    )
}
export default CallToAction;