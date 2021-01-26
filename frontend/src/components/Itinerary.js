import React,{useEffect, useState} from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import NavBar from "./NavBar";
import NotItineraries from './NotItineraries';
import {Link} from "react-router-dom"

const Itinerarie = (props) => {
    const propsCityName=props.match.params.cityName;
    const [city,setCity]=useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/api/itineraries/${propsCityName}`)
        .then(response=>response.json())
        .then(date=>setCity(date.response))
        .catch(error=>{alert("Id not found: redirecting...")
        props.history.goBack()})
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar/>
            <section className="container sectionItinerary">
                <div className="itinerarie" style={{backgroundImage:`url("../assets/${city.cityPic}")`}}>
                    <h5>{city.cityName}</h5>
                </div>
                <NotItineraries/>
                <div className="divItinerary">
                    <button ><Link to="/cities"><ArrowBackIcon /></Link></button>
                    <button ><Link to="/home"><HomeIcon /></Link></button>
                </div>
            </section>
        </>
    )
}

export default Itinerarie;
