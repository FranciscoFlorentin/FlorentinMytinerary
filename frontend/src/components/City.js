import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class City extends Component {
    
    render() {
        return (
            <>
                <div className="city1">
                    {/* Cambio el url por /itineraries/(nombre de la ciudad sin espacio) */}
                    <Link to={`/itineraries/${(this.props.city.name).replace(/ /g, "")}`}>
                        <div style={{backgroundImage:`url("${this.props.city.dir}")`}}> 
                            {<h5>{this.props.city.name}</h5>}
                        </div>
                    </Link>
                </div>
            </>
        )
    }
}
