import React from 'react'

 const Comment = ({comment}) => {
    return (
        <div className="comment">
            <div className="userPic" style={{backgroundImage:`url("../assets/${comment.userPic}")`}}></div>
            <div>
                <div className="userName">{comment.userName} says:</div>
                <div className="userComment">{comment.userComment}</div>           
            </div>
        </div>
    )
}
export default Comment;