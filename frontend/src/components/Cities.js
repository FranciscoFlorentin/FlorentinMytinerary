import { useEffect } from "react";
import City from "./City";
import NavBar from "./NavBar";
import CityNotFound from "./CityNotFound";
import Loader from "./Loader";
import {connect} from "react-redux";
import cityActions from "../redux/actions/cityActions";

const Cities=(props)=>{

    useEffect(() => {
        if(props.cities.length===0){props.allCities()}
        window.scrollTo(0, 0)
    }, [])

    if(props.cities.length===0){
        return (<>
                <NavBar/>
                <Loader/>
                </>)
    }

    return (
        <>
            <NavBar />
            <section className="container sectionCities">
                <input type="text" placeholder="Place a city name" onChange={(e)=>props.filteredCities(e.target.value)} /> 
                {props.citiesFiltered.length===0 ?<CityNotFound />: props.citiesFiltered.map(city => <City key={city._id} city={city}/>)}
            </section>
        </>
    )
}

const mapStateToProps=state=>{
    return {
        cities: state.cityReducer.cities,
        citiesFiltered: state.cityReducer.filteredCities,
    }
}
const mapDispatchToProps={
    allCities: cityActions.getCities,
    filteredCities: cityActions.getFilteredCities
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities);