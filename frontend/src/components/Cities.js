import { useEffect } from "react";
import City from "./City";
import NavBar from "./NavBar";
import CityNotFound from "./CityNotFound";
import Loader from "./Loader";
import {connect} from "react-redux";
import cityActions from "../redux/actions/cityActions";

const Cities=(props)=>{

    useEffect(() => {
        props.allCities()
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar />
            <section className="container sectionCities">
                <input type="text" placeholder="Place a city name" onChange={(e)=>props.filteredCities(e.target.value)} /> 
                {!props.citiesFiltered  ?<Loader />: props.citiesFiltered.map(city => <City key={city._id} city={city}/>)
                 }
            </section>
        </>
    )
}

const mapStateToProps=state=>{
    return {
        cities: state.cityReducer.cities,
        citiesFiltered: state.cityReducer.filteredCities,
        value: state.cityReducer.value
    }
}
const mapDispatchToProps={
    allCities: cityActions.getCities,
    filteredCities: cityActions.getFilteredCities
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities);