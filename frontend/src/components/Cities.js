import { useState,useEffect } from "react"
import City from "./City"
import NavBar from "./NavBar"
import CityNotFound from "./CityNotFound";
import Loader from "./Loader"

const Cities=()=>{

    const [inputValue,setImputValue]=useState("");
    const [cities,setCities]=useState([]);
    const [citiesToShow,setCitiesToShow]=useState([]);
    const [loader,setLoader]=useState(true);

    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
        .then(response=>response.json())
        .then(data=>{setCities(data.response)
                    setCitiesToShow(data.response)
                    setLoader(false)})
        window.scrollTo(0, 0)
    }, [])
    
    // Cada vez que actualizo el inputValue modifico el estado del array que voy a mostrar
    useEffect(()=>{
        setCitiesToShow(cities.filter( city=> city.cityName.toUpperCase().indexOf(inputValue.toUpperCase().trim())===0))
    },[inputValue])
    
    
    return (
        <>
            <NavBar />
            <section className="container sectionCities">
                <input type="text" placeholder="Place a city name" onChange={(e)=>setImputValue(e.target.value)}/> 
                {/* muestra el loader mientras fetchea la data o muestra las ciudades que coinciden y si no coinciden muetra mensaje */ }   
                {(loader==true)? <Loader/>
                :  ((citiesToShow.length!=0) ? citiesToShow.map(city => <City key={city._id} city={city}/>)
                :  <CityNotFound /> )}
               
            </section>
        </>
    )
}
export default Cities;