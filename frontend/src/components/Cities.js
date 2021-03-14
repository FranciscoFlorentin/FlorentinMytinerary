import { useEffect } from "react";
import City from "./City";
import NavBar from "./NavBar";
import Loader from "./Loader";
import {connect} from "react-redux";
import cityActions from "../redux/actions/cityActions";

const Cities=(props)=>{

    useEffect(() => {
        if(props.citiesFiltered){props.filterCities("")}
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
                <input type="text" placeholder="Search city" onChange={(e)=>props.filterCities(e.target.value)} /> 
                {props.citiesFiltered.length===0 
                ? 
                <div className="cityNotFound" style={{backgroundImage:`url("./assets/city404.jpg")`}}> 
                    {<h3>City not found, try another.</h3>}
                </div>
                : props.citiesFiltered.map(city => <City key={city._id} city={city}/>)}
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
    filterCities: cityActions.getFilterCities
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities);