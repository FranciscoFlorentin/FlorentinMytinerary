
const inicialState={
    cities:[],
    filteredCities:[]
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
                filteredCities: state.cities.filter(
                    city=> city.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim())===0)
            }
            break;
        case ("ADD_CITY"):
            return state;
            
        default:
            return state;
    }
}
export default cityReducer;