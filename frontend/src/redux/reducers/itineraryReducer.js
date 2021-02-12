const initial={
    itinerariesByCity:[]
};

const itineraryReducer=(state=initial,action)=>{
    switch (action.type) {
        case ("ITINERARIES_BY_CITY"):
            return{
                ...state,
                itinerariesByCity: action.payload
            }
            break;
        
        case ("UPDATE_COMMENTS"):
            return {
                ...state,
                itinerariesByCity: state.itinerariesByCity.map(itinerary=>{
                    itinerary._id===action.payload._id 
                    ? itinerary=action.payload 
                    : itinerary })
            }
        default:
            return state;
    }
}
export default itineraryReducer;