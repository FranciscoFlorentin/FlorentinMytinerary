const initial={
    activitiesByItinerary:[]
};

const activityReducer=(state=initial,action)=>{
    switch (action.type) {
        case ("ACTIVITIES_BY_ITINERARY"):
            return{
                ...state,
                activitiesByItinerary: action.payload
            }
            break;

        default:
            return state;
    }
}
export default activityReducer;