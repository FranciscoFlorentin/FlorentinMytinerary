import React from 'react';
import {connect} from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {useState,useEffect} from "react";
import Activities from './Activities';
import Comment from "./Comment";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from "axios"

const Itinerary = ({loggedUser,itinerary}) => {
    const [viewMoreLess,setViewMoreLess]=useState(false);
    const [likesUpdated,setLikesUpdated]=useState(itinerary.likes);
    const [userLiked,setUserliked]=useState(null);
    const [newComment,setNewComment]=useState("");

    useEffect(() => {
        // consulto si el usuario ya dio like el itinerario
        if (loggedUser && itinerary.userLikes.find(id=>id===loggedUser.id)){
            setUserliked(true)
        }
    }, [])
    const liked=async()=>{
        if(loggedUser){
            axios.put(`http://localhost:4000/api/itinerary/${itinerary._id}`,{},{
            headers:{
                Authorization: `Bearer ${loggedUser.token}`
            }
        })
        .then(data=>setLikesUpdated(data.data.response.likes))
        .catch(error=>console.log(error))
        setUserliked(!userLiked)
        } 
        else{
            alert("necesita estar logeado")
        }
    }
    // const commentInput=(e)=>{
    //     e.preventDefault()
    //     setNewComment(e.target.value)
    // }
    // const commentSend=(e)=>{
    //     e.preventDefault();
    //     console.log(newComment)
    // }
    
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
                            
                                {userLiked===true ?<FavoriteIcon/>:<FavoriteBorderIcon/>} 
                                <p>{likesUpdated}</p>
                                <button onClick={liked}>Like</button>
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
                        {itinerary.comments.map(comment=><Comment key={comment._id} comment={comment}/>)}
                        <div className="divInputComment">
                            {loggedUser 
                            ?<input type="text " placeholder="Write a comment" onChange={commentInput}  />
                            :<input type="text " disabled placeholder="You must logged to comment"/>}
                        </div>
                        <div className="itineraryButtons">
                            {viewMoreLess===true && <button onClick={()=>setViewMoreLess(!viewMoreLess)}>View Less</button> }
                        </div>
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

export default connect(mapStateToProps,null)(Itinerary);