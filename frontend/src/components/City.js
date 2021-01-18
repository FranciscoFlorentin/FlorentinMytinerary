import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <>
                <div className="city1">
                    <div className="city2">
                        {this.props.city}
                    </div>
                </div>
            </>
        )
    }
}
