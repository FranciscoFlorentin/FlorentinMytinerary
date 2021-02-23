const initial={
    itinerariesByCity:[]
}
const updateItinerary=(oldsItineraries,newItinerary)=>{
    return (oldsItineraries.map(itinerary=>{
        if(itinerary._id===newItinerary._id){itinerary=newItinerary;}
        return itinerary
    }
    ))
}
const itineraryReducer=(state=initial,action)=>{
    switch (action.type) {
        case ("ITINERARIES_BY_CITY"):
            return{
                ...state,
                itinerariesByCity: action.payload
            }
            break;
        
        case ("UPDATE_ITINERARIES"):
            const aux=updateItinerary(state.itinerariesByCity,action.payload);
            return {
                ...state,
                itinerariesByCity:aux
            }
        default:
            return state;
    }
}
export default itineraryReducer;