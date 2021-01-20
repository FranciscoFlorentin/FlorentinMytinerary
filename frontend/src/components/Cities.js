import { useState,useEffect } from "react"
import City from "./City"

<<<<<<< HEAD
const cities1=[{id:"sf" ,name:"Santa Fe"},{id:"ba" ,name:"Buenos Aires"},{id:"cb" ,name:"Cordoba"},
{id:"mz" ,name:"Mendoza"},{id:"mn" ,name:"Misiones"},{id:"st" ,name:"Salta"},{id:"sj" ,name:"San Juan"},
{id:"jj" ,name:"Jujuy"}]

const Cities=()=>{
    const [inputValue,setImputValue]=useState("");
    const [cities,setCities]=useState([]);
    useEffect(() => {
        setCities(cities1);
    }, [])
=======
const Cities=()=>{
    const [inputValue,setImputValue]=useState("");
    const [cities,setCities]=useState([]);
    const [citiesToShow,setCitiesToShow]=useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
        .then(response=>response.json())
        .then(date=>{setCities(date.response)
                    setCitiesToShow(date.response)})
    }, [])
    
    // Cada vez que actualizo el inputValue modifico el estado del array que voy a mostrar
    useEffect(()=>{
        setCitiesToShow(cities.filter( city=> city.name.toUpperCase().indexOf(inputValue.toUpperCase())===0))
    },[inputValue])

>>>>>>> 7368a5567a10be24ce131edb26bfa0913265727e
    return (
        <>
            <section className="container sectionCities">
                <input type="text" placeholder="Place a city name" onChange={(e)=>setImputValue(e.target.value)}/> 
                    {/* paso al componente city para que muestre los array que coinciden con la busqueda */ }           
                    {citiesToShow.map(city=><City key={city.name} city={city}/>)}
            </section>
        </>
    )
}
export default Cities;