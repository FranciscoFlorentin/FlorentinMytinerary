import React from 'react'
import itineraryActions from '../redux/actions/itineraryActions';
import {connect} from "react-redux"
import {useState} from "react"
import { FiEdit2,FiTrash2} from "react-icons/fi";


const Comment = ({comment,deleteComment,editComment,itineraryId,setItinerary,loggedUser}) => {
    const [editMode,setEditMode]=useState(false);
    const [editedComment,setEditedComment]=useState(comment.userComment);
    
    const sendCommentToDelete=async (e)=>{
        e.preventDefault();
        const response= await deleteComment(comment,itineraryId);
        setItinerary(response);
    }
    const sendCommentEdited=async (e)=>{
        e.preventDefault();
        const response= await editComment(comment,editedComment,itineraryId);
        setItinerary(response);
        setEditMode(!editMode); 
        setEditedComment("");
    }

    return (
        <div className="comment">
            <div className="userPic" style={{backgroundImage:`url("${comment.userPic}")`}}></div>
            <div className="comment1">
                <div className="userName">{comment.userName} says:</div>
                {editMode &&
                    <div className="userComment">
                        <form onSubmit={sendCommentEdited}>
                            <input type="text" defaultValue={comment.userComment} onChange={e=>setEditedComment(e.target.value)}/> 
                            <button onClick={()=>setEditMode(!editMode)}>Cancel</button> 
                            <button type="submit" >Confirm</button>
                        </form> 
                    </div>
                }
                <div className="userComment">
                {!editMode && <div className="userComment">{comment.userComment}</div>}
                    {(loggedUser && loggedUser.id===comment._id && !editMode)&&  
                        <>    
                            <button onClick={sendCommentToDelete}><FiTrash2/></button>
                            <button onClick={()=>setEditMode(!editMode)}><FiEdit2/></button>
                        </>
                    }
                </div>          
            </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        loggedUser:state.userReducer.loggedUser
    }
}
const mapDispatchToProps={
    deleteComment:itineraryActions.deleteComment,
    editComment:itineraryActions.editComment
}
export default connect(mapStateToProps,mapDispatchToProps)(Comment);