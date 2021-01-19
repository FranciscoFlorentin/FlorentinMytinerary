import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <>
                <div className="city1">
                    <div className="city2" style={{
                        backgroundImage:`url("${this.props.city.dir}")`,
                        color:"yellow"
                    }}> 
                        {this.props.city.name}
                    </div>
                </div>
            </>
        )
    }
}
