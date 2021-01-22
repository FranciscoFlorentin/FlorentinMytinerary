import React,{useEffect, useState} from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
const Itinerarie = (props) => {
    const propsCityName=props.match.params.cityName;
    const [city,setCity]=useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/api/itineraries/${propsCityName}`)
        .then(response=>response.json())
        .then(date=>setCity(date.response))
    }, [])

    return (
        <>
            <section className="container sectionItinerary">
                <div style={{backgroundImage:`url("../assets/${city.cityPic}")`}}>
                    <h5>{city.cityName}</h5>
                </div>
                <button onClick={()=>props.history.goBack()} ><ArrowBackIcon />Back</button>
            </section>
        </>
    )
}

export default Itinerarie;
