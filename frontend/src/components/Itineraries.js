import React,{useEffect, useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import NavBar from "./NavBar";
import NotItineraries from './NotItineraries';
import {Link} from "react-router-dom";
import Itinerary from "./Itinerary";
import {connect} from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";

const Itineraries = (props) => {

    useEffect(() => {
        console.log(props.match.params)
        props.getItinerariesByCityId(props.match.params.idCity)
        window.scrollTo(0, 0)
        
    }, [])
    return (
        <>
            <NavBar/>
            <section className="container sectionItinerary">
                {/* { <div className="itinerarie" style={{backgroundImage:`url("../assets/${city.cityPic}")`}}>
                    <h5>{city.cityName}</h5>
                </div> */}
                {console.log(props.itinerariesByCity)}
                {!props.itinerariesByCity ? <h1>cargando...</h1> : props.itinerariesByCity.map(itinerary=><Itinerary key={itinerary._id} itinerary={itinerary} />)}
                {/* <NotItineraries/> */}
                <div className="divItinerary">
                    <button ><Link to="/cities"><ArrowBackIcon /></Link></button>
                    <button ><Link to="/home"><HomeIcon /></Link></button>
                </div> 
            </section>
        </>
    )
}
const mapStateToProps= (state) =>{
    return{
        itinerariesByCity: state.itineraryReducer.itinerariesByCity
    }
}
const mapDispatchToProps={
    getItinerariesByCityId: itineraryActions.getItinerariesByCityId
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);
