import { useState,useEffect } from "react"
import City from "./City"
import NavBar from "./NavBar"
import CityNotFound from "./CityNotFound";
import Loader from "./Loader"
import {connect} from "react-redux";
import cityActions from "../redux/actions/cityActions";


const Cities=(props)=>{

    const [inputValue,setImputValue]=useState("");

    useEffect(() => {
        props.allCities() 
        window.scrollTo(0, 0)
    }, [])

    // useEffect(()=>{
    
    //    props.cities.filter( city=> city.cityName.toUpperCase().indexOf(inputValue.toUpperCase().trim())===0)
    // },[inputValue])
    
    
    return (
        <>
            <NavBar />
            <section className="container sectionCities">
                {/* <input type="text" placeholder="Place a city name" onChange={(e)=>setImputValue(e.target.value)} />    */}
                {props.cities ? props.cities.map(city => <City key={city._id} city={city}/>) : <Loader />}
               
            </section>
        </>
    )
}



const mapStateToProps=state=>{
    return {
        cities: state.city.cities
    }
}
const mapDispatchToProps={
    allCities: cityActions.getCities
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities);