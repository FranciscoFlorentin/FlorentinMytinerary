import React from 'react'

const Activity = (props) => {
    return (
        <>
            <div className="activity">
                <div className="activityImg" style={{backgroundImage:`url("../assets/activities/${props.activity.activityPic}")`}}></div>
                <div className="activityName">{props.activity.activityName}</div>
            </div>
        </>
    )
}
export default Activity;
