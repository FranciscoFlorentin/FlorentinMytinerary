import React,{useEffect} from 'react';
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

const Itineraries = (props) => {

    useEffect(() => {
        if(props.cities.length===0){props.getCities()}
        props.getItinerariesByCityId(props.match.params.idCity)
        window.scrollTo(0, 0)
    }, [])
    props.getOneCity(props.match.params.idCity)
    if(!props.city){return <Loader/> }
    
    return (
        <>

            <NavBar/>
            <section className="">
                
                <div className="itineraryCity" style={{backgroundImage:`url("../assets/${props.city.cityPic}")`}}>
                    <div className="cityTitle"><h3>{props.city.cityName}</h3></div>
                </div> 
                <div className="container">

                    {(props.itinerariesByCity.length===0) && <NotItineraries/>}
                    
                    {props.itinerariesByCity.map(itinerary=>
                        <Itinerary key={itinerary._id} itinerary={itinerary}/>
                    )}
                    
                    <div className="itineraryButtons">
                        <button ><Link to="/cities"><ArrowBackIcon /></Link></button>
                        <button ><Link to="/home"><HomeIcon /></Link></button>
                    </div> 
                </div>
            </section>
        </>
    )
}
const mapStateToProps= (state) =>{
    return{
        cities: state.cityReducer.cities,
        city: state.cityReducer.city,
        itinerariesByCity: state.itineraryReducer.itinerariesByCity
    }
}
const mapDispatchToProps={
    getCities: cityActions.getCities,
    getItinerariesByCityId: itineraryActions.getItinerariesByCityId,
    getOneCity: cityActions.getOneCity,
    cleanCity: cityActions.cleanCity
}

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);
