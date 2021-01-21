import React,{useEffect, useState} from 'react'

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
                {console.log(city)}
                <div style={{backgroundImage:`url("../assets/${city.cityPic}")`}}>
                    <h5>{city.cityName}</h5>
                </div> 

            </section>
        </>
    )
}

export default Itinerarie;
