import React from 'react'

const CityNotFound = () => {
    return (
        <>
            <div className="cityNotFound" style={{backgroundImage:`url("./assets/city404.jpg")`}}> 
                {<h3>City not found, try another.</h3>}
            </div>
            
        </>
    )
}
export default CityNotFound;
