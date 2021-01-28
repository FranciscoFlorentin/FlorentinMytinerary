const inicialState={};

const itineraryReducer=(state=inicialState,action)=>{
    switch (action.type) {
        case ("ALL_ITINERARIES"):
            return{
                ...state,
                itineraries: action.payload
            }
            break;
        default:
            return state;
    }
}
export default itineraryReducer;