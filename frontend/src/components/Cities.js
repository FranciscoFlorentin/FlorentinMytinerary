import { useState,useEffect } from "react"
import City from "./City"

const cities=[{id:"sf" ,name:"Santa Fe"},{id:"ba" ,name:"Buenos Aires"},{id:"cb" ,name:"Cordoba"},
{id:"mz" ,name:"Mendoza"},{id:"mn" ,name:"Misiones"},{id:"st" ,name:"Salta"},{id:"sj" ,name:"San Juan"},
{id:"jj" ,name:"Jujuy"}]

const Cities=()=>{
    const [inputValue,setImputValue]=useState("");
    return (
        <>
            <section className="container sectionCities">
                <input type="text" placeholder="Place a city name" onChange={(e)=>setImputValue(e.target.value)}/> 
                {cities.map(city=>{
                    return (city.name.toUpperCase().indexOf(inputValue.toUpperCase()) === 0) 
                    && <City city={city.name}/>
                })}
            </section>
        </>
    )
}
export default Cities;