const inicialState={
    cities:[],
    filteredCities:[],
    value:""
};

const cityReducer=(state=inicialState,action)=>{
    switch (action.type) {
        case ("ALL_CITIES"):
            return{
                ...state,
                cities: action.payload,
                filteredCities: action.payload
            }
            break;
        case ("FILTERED_CITIES"):
            return{
                ...state,
                filteredCities: action.payload
            }
            break;
            
        default:
            return state;
    }
}
export default cityReducer;