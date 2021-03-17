import Activity from "./Activity";
const Activities=(props)=>{
  
    return (
        
                <div className="activities">
                    {props.activities.map(activity=>
                        <Activity key={activity.activitieName} activity={activity}/> )
                    }
                    {props.activities.length===0 && <div style={{backgroundImage:"url('../assets/notItineraries.png')",
                    backgroundSize:"cover",height:"100%",width:"100%"}}> 
                        <h2 style={{textAlign:"center",paddingTop:"5vh"}}>Not activities yet :( </h2>  
                    </div> }       
                </div>
    )
}


export default Activities;