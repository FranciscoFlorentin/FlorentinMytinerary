const inicialState={};

const cityReducer=(state=inicialState,action)=>{
    switch (action.type) {
        case ("ALL_CITIES"):
            return{
                ...state,
                cities: action.payload
            }
            break;
        case ("FILTERED_CITIES"):
            return{
                ...state,
                cities: action.payload
            }
            break;
            
        default:
            return state;
    }
}
export default cityReducer;