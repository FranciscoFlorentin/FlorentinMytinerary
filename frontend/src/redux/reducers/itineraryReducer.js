const initial={
    itinerariesByCity:[],
    update:false,
};
const hola=(oldsItineraries,newItinerary)=>{
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
            const aux=hola(state.itinerariesByCity,action.payload);
            console.log("/////////////STORE////////////////////////////")
            console.log(aux)
            console.log("//////////////PAYLOAD//////////////////////////////////")
            console.log(action.payload)
            return {
                ...state,
                staitinerariesByCity:aux,
                update: (state.update===true)? false : true
            }
        default:
            return state;
    }
}
export default itineraryReducer;