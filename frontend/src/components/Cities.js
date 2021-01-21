import { useState,useEffect } from "react"
import City from "./City"

const Cities=()=>{
    const [inputValue,setImputValue]=useState("");
    const [cities,setCities]=useState([]);
    const [citiesToShow,setCitiesToShow]=useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
        .then(response=>response.json())
        .then(data=>{setCities(data.response)
                    setCitiesToShow(data.response)})
    }, [])
    
    // Cada vez que actualizo el inputValue modifico el estado del array que voy a mostrar
    useEffect(()=>{
        setCitiesToShow(cities.filter( city=> city.cityName.toUpperCase().indexOf(inputValue.toUpperCase())===0))
    },[inputValue])

    return (
        <>
            <section className="container sectionCities">
                <input type="text" placeholder="Place a city name" onChange={(e)=>setImputValue(e.target.value)}/> 
                    {/* paso al componente city para que muestre los array que coinciden con la busqueda */ }           
                    {citiesToShow.map(city=><City key={city._id} city={city}/>)}
            </section>
        </>
    )
}
export default Cities;