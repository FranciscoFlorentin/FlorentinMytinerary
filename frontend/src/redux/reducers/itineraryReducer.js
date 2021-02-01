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

        default:
            return state;
    }
}
export default itineraryReducer;