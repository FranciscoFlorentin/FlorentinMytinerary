import React from 'react';
import {connect} from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {useState,useEffect} from "react";
import Activities from './Activities';
import Comment from "./Comment";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import itineraryActions from '../redux/actions/itineraryActions';
import Swal from 'sweetalert2';

const Itinerary = ({loggedUser,addComment,itinerary1,itineraryLiked,getItinerariesByCityId}) => {
    const [viewMoreLess,setViewMoreLess]=useState(false);
    const [newComment,setNewComment]=useState("");
    const [itinerary, setItinerary]=useState(itinerary1);
    const [userLike,setUserLike]=useState(null);

    useEffect(() => {
        console.log(itinerary)
        if(loggedUser && itinerary.userLikes.find(id=>id===loggedUser.id)){
            setUserLike(true);
        }else{ setUserLike(false)}
        return ()=>{
            getItinerariesByCityId(itinerary.idCity)
        }
    }, [])
    // LIKES
    const liked=async()=>{
        if(loggedUser){
            const response = await itineraryLiked(itinerary._id);
            setItinerary(response);
            setUserLike(!userLike)
        }
        else{Swal.fire(`You must be logged `)}
    }
    // COMMENTS
    const commentInput=(e)=>{
        e.preventDefault()
        setNewComment(e.target.value); 
    }
    const commentSend= async (e)=>{
        e.preventDefault();
        setNewComment(e.target.value);
        
        const response= await addComment(newComment,itinerary._id);
        setItinerary(response)
    }
    
    return (
        <>  
            
            <div className="itinerary">
                <div className="itineraryContent">
                    <div className="itineraryContent1">
                        <div className="itineraryUserImg" style={{backgroundImage:`url("../assets/${itinerary.userPicName}")`}}></div>
                        <div className="itineraryUserName">{itinerary.userName}</div>
                    </div>
                    <div className="itineraryContent2">
                        <div className="itineraryName"><h4>{itinerary.itineraryName}</h4></div>
                        <div className="itineraryHashtag">{itinerary.hashtag.map(hashtag=><h6>{hashtag}</h6> )}</div>
                        <div className="viewMoreLess">{viewMoreLess===false && <button onClick={()=>setViewMoreLess(!viewMoreLess)} >View More</button> }</div>
                    </div>
                    <div className="itineraryContent3">
                        <div className="likeIcon">
                                {userLike===true?<FavoriteIcon/>:<FavoriteBorderIcon/>} 
                                <p>{itinerary.likes}</p>
                                <button onClick={liked}>{userLike===false ?<p>Like</p>: <p>Dislike</p> }</button>
                        </div>
                        <div>Duration: {itinerary.duration} h.</div>
                        <div className="priceIcon"> {
                            Array(itinerary.price).fill(<AttachMoneyIcon/>) }
                        </div>
                    </div>
                </div>  
            </div>
            {viewMoreLess===true  
            ?  <div className="itineraryShowHide">
                    <Activities activities={itinerary.activities}/> 
                    <div className="comments"> 
                        {itinerary.comments.map(comment=><Comment key={comment._id} comment={comment} itineraryId={itinerary._id} setItinerary={setItinerary}/>)}
                        <div className="divInputComment">
                            {loggedUser 
                            ?
                                <>
                                    <form onSubmit={commentSend}>
                                        <input type="text " placeholder="Write a comment" onChange={commentInput} />
                                        <button type="submit">Comment</button>
                                    </form>
                                </>
                            :<input type="text " disabled placeholder="You must logged to comment"/>}
                        </div>
                    </div>
                        <div className="itineraryButtons">
                            {viewMoreLess===true && <button onClick={()=>setViewMoreLess(!viewMoreLess)}>View Less</button> }
                        </div>
                </div>
            :<></>  
            }
        </>
    )
}
const mapStateToProps= state=>{
    return {
        loggedUser: state.userReducer.loggedUser
    }
}
const mapDispatchToProps={
    addComment:itineraryActions.addComment,
    itineraryLiked:itineraryActions.itineraryLiked,
    getItinerariesByCityId: itineraryActions.getItinerariesByCityId
}

export default connect(mapStateToProps,mapDispatchToProps)(Itinerary);