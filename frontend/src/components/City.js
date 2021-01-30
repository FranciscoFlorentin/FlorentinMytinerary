import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class City extends Component {
    componentWillUnmount(){
        console.log(this.props)
    }
    render() {
        return (
            <>
                <div className="city1">
                    {/* Cambio el url por /cities/(nombre de la ciudad sin espacio) */}
                    <Link to={`/cities/${(this.props.city._id)}`}>
                        <div style={{backgroundImage:`url("./assets/${this.props.city.cityPic}")`}}> 
                            {<h5>{this.props.city.cityName}</h5>}
                        </div>
                    </Link>
                </div>
            </>
        )
    }
}
