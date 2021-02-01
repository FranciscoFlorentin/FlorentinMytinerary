import Activity from "./Activity";
const Activities=(props)=>{
  
    return (
                <div className="activities">
                    {props.activitiesByItinerary.map(activity=>
                        <Activity key={activity._id} activity={activity}/> )
                    }       
                </div>
    )
}


export default Activities;