const initial={
    itinerariesByCity:[]
};

const itineraryReducer=(state=initial,action)=>{
    switch (action.type) {
        case ("ITINERARIES_BY_CITY"):
        console.log(action.payload)    
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