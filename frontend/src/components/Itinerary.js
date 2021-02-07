import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {useState} from "react";
import Activities from './Activities';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Itinerary = (props) => {
    const [viewMoreLess,setViewMoreLess]=useState(false);
    const liked=()=>{
        
    }
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
                        <div className="viewMoreLess">{viewMoreLess===false && <button onClick={()=>setViewMoreLess(!viewMoreLess)} >View More</button> }</div>
                    </div>
                    <div className="itineraryContent3">
                        <div className="likeIcon">
                                {props.itinerary.likes===0 ?<FavoriteBorderIcon/> : <FavoriteIcon/>} 
                                <p>{props.itinerary.likes}</p>
                                <button onClick={liked}>Like</button>
                        </div>
                        <div>Duration: {props.itinerary.duration} h.</div>
                        <div className="priceIcon"> {
                            Array(props.itinerary.price).fill(<AttachMoneyIcon/>) }
                        </div>
                    </div>
                </div>  
            </div>
            
            <div className="itineraryShowHide">
               {(viewMoreLess===true) &&<Activities activities={props.itinerary.activities}/> }
                    {viewMoreLess===true && <div className="comment"> <input type="text " disabled="true" placeholder="You must login to comment"/></div>}    
                <div className="itineraryButtons">
                    {viewMoreLess===true && <button onClick={()=>setViewMoreLess(!viewMoreLess)}
                     >View Less</button> }
                </div>
            </div>
            
        </>
    )
}


export default Itinerary;