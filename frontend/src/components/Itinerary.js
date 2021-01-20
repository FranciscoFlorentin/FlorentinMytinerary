import React,{useEffect, useState} from 'react'

const Itinerarie = (props) => {
    const cityName=props.match.params.cityName;
    const [city,setCity]=useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/itineraries/${cityName}`)
        .then(response=>response.json())
        .then(date=>setCity(date.response))
    }, [])

    return (
        <>
            <section className="container sectionItinerary">
                <div style={{backgroundImage:`url(".${city.dir}")`}}>
                    <h5>{city.name}</h5>
                    {console.log(city)}
                </div> 

            </section>
        </>
    )
}

export default Itinerarie;
