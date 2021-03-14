import React,{useEffect,useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import NavBar from "./NavBar";
import NotItineraries from './NotItineraries';
import {Link} from "react-router-dom";
import Itinerary from "./Itinerary";
import {connect} from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import cityActions from "../redux/actions/cityActions";
import Loader from "./Loader"


const Itineraries = ({getCities,cities,itinerariesByCity,getItinerariesByCityId,match:{params:{idCity}}}) => {
    const [city,setCity]=useState({});

    useEffect(() => {
        if(cities.length===0){getCities()}
        window.scrollTo(0, 0)
        getItinerariesByCityId(idCity)
    }, [])
    
    useEffect(() => {
        setCity(cities.find(city=>city._id===idCity))
    }, [cities])
    
    if(!city){return <Loader/> }

    return (
        <>
            <NavBar/>
            <section className="">
                
                <div className="itineraryCity" style={{backgroundImage:`url("${city.cityPic}")`}}>
                    <div className="cityTitle"><h3>{city.cityName}</h3></div>
                </div> 
                <div className="container">

                    {(itinerariesByCity.length===0) && <NotItineraries/>}
                    
                    {itinerariesByCity.map(itinerary=>
                        <Itinerary key={itinerary._id} itinerary1={itinerary} />
                    )}

                    <div className="itineraryButtons">
                        <button ><Link to="/cities"><ArrowBackIcon /></Link></button>
                        <button ><Link to="/"><HomeIcon /></Link></button>
                    </div> 
                </div>
            </section>
        </>
    )
}
const mapStateToProps= (state) =>{
    return{
        cities: state.cityReducer.cities,
        itinerariesByCity: state.itineraryReducer.itinerariesByCity 
    }
}
const mapDispatchToProps={
    getCities: cityActions.getCities,
    getItinerariesByCityId: itineraryActions.getItinerariesByCityId
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);
