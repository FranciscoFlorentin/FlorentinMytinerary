const inicialState={
    cities:[],
    city:{},
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

        case ("ONE_CITY"):
            console.log(state)
            return{
                ...state,
                city: state.cities.find(city=>city._id===action.payload),
            }
            break;

        case ("FILTERED_CITIES"):
            return{
                ...state,
                filteredCities: state.cities.filter(
                    city=> city.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim())===0)
            }
            break;
        case("CLEAN_CITY"):
            return{
                city:{}
            }
        default:
            return state;
    }
}
export default cityReducer;