import React,{useEffect, useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import NavBar from "./NavBar";
import NotItineraries from './NotItineraries';
import {Link} from "react-router-dom";
import Itinerary from "./Itinerary";
import {connect} from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import cityActions from "../redux/actions/cityActions";

const Itineraries = (props) => {

    useEffect(() => {
        props.getOneCity(props.match.params.idCity)
        props.getItinerariesByCityId(props.match.params.idCity)
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <NavBar/>
            <section className="">
                <div className="cityTitle"><h3>{props.city.cityName}</h3></div>
                <div className="itineraryCity" style={{backgroundImage:`url("../assets/${props.city.cityPic}")`}}></div> 
                <div className="container">
                    {!props.itinerariesByCity ? <h1>cargando...</h1> 
                    : props.itinerariesByCity.map(itinerary=><Itinerary key={itinerary._id} itinerary={itinerary} />)}
                    <div className="itineraryButtons">
                        <button ><Link to="/cities"><ArrowBackIcon /></Link></button>
                        <button ><Link to="/home"><HomeIcon /></Link></button>
                    </div> 
                </div>
                {/* <NotItineraries/> */}
            </section>
        </>
    )
}
const mapStateToProps= (state) =>{
    return{
        city: state.cityReducer.city,
        itinerariesByCity: state.itineraryReducer.itinerariesByCity
    }
}
const mapDispatchToProps={
    getItinerariesByCityId: itineraryActions.getItinerariesByCityId,
    getOneCity: cityActions.getOneCity
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);
