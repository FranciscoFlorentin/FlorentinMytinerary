import { useState,useEffect } from "react"
import City from "./City"
import NavBar from "./NavBar"
import CityNotFound from "./CityNotFound";
import Loader from "./Loader"
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
                <input type="text" placeholder="Place a city name" onChange={(e)=>props.filteredCities(props.cities,e.target.value)} />  
                
                {/* {props.cities ? props.cities.map(city => <City key={city._id} city={city}/>) : <Loader />} */}
                
                {props.citiesFiltered && props.citiesFiltered.map(city => <City key={city._id} city={city}/>)}
            </section>
        </>
    )
}

const mapStateToProps=state=>{
    return {
        cities: state.city.cities,
        citiesFiltered: state.city.filteredCities
    }
}
const mapDispatchToProps={
    allCities: cityActions.getCities,
    filteredCities: cityActions.getFilteredCities
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities);