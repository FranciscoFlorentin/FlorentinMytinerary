import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
                        <div className="likeIcon"><span><FavoriteIcon/></span> <p>{props.itinerary.likes}</p></div>
                        <div>Duration: {props.itinerary.duration} h.</div>
                        <div className="priceIcon"> {props.itinerary.price===1 ? <AttachMoneyIcon/>
                            :props.itinerary.price===2 ?<div><AttachMoneyIcon/><AttachMoneyIcon/></div>
                            :props.itinerary.price===3 ?<div><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></div>
                            :props.itinerary.price===4 ?<div><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></div>
                            :props.itinerary.price===5 && <div><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/><AttachMoneyIcon/></div>
                            }</div>
                    </div>
                </div>  
            </div>
        </>
    )
}
export default Itinerary;