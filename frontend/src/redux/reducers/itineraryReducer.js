const initial={
    itinerariesByCity:[],
    itinerary:{}
};

const itineraryReducer=(state=initial,action)=>{
    switch (action.type) {
        case ("ITINERARIES_BY_CITY"):
            return{
                ...state,
                itinerariesByCity: action.payload
            }
            break;
        case ("ITINERARY"):
            return {
                ...state,
                itinerary:action.payload
            }
        default:
            return state;
    }
}
export default itineraryReducer;