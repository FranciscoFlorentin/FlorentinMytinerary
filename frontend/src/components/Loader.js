import React from 'react'

const Loader = () => {
    return (
        <>  
            <div className="loader">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_wofwoz8o.json"  background="transparent"  
            speed="1"  style={{width: "30vw", height: "30vh"}}  loop  autoplay></lottie-player>
            </div>
        </>
    )
}

export default Loader;
