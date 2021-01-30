import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const Itinerary = (props) => {
    
    return (
        <>  
            <div className="itinerary">
                <div className="itineraryContent">
                    <div className="itineraryContent1">
                        <div className="itineraryUserImg" style={{backgroundImage:`url("../assets/${props.itinerary.userPicName}")`}}></div>
                        <div className="itineraryUserName">{props.itinerary.userName}</div>
                    </div>
                    <div className="itineraryContent2">
                        <div className="itineraryName"><h4>{props.itinerary.itineraryName}</h4></div>
                        <div className="itineraryHashtag">{props.itinerary.hashtag.map(hashtag=><h6>{hashtag}</h6> )}</div>
                        <button>View More</button>
                        </div>
                    <div className="itineraryContent3">
                        <div><FavoriteIcon/> {props.itinerary.likes}</div>
                        <div>Duration: {props.itinerary.duration} h</div>
                        <div> {props.itinerary.price===1 ? <MonetizationOnIcon/>
                            :props.itinerary.price===2 ?<div><MonetizationOnIcon/><MonetizationOnIcon/></div>
                            :props.itinerary.price===3 ?<div><MonetizationOnIcon/><MonetizationOnIcon/><MonetizationOnIcon/></div>
                            :props.itinerary.price===4 ?<div><MonetizationOnIcon/><MonetizationOnIcon/><MonetizationOnIcon/><MonetizationOnIcon/></div>
                            :props.itinerary.price===5 && <div><MonetizationOnIcon/><MonetizationOnIcon/><MonetizationOnIcon/><MonetizationOnIcon/><MonetizationOnIcon/></div>
                            }</div>
                    </div>
                </div>  
            </div>
        </>
    )
}
export default Itinerary;