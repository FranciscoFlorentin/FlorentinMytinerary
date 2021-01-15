import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const slides=[
    [
        {ciudad:"Santa Fe", dir:"./assets/santa fe.jpg"},
        {ciudad:"Montevideo", dir:"./assets/Montevideo.jpg"},
        {ciudad:"São Paulo", dir:"./assets/Sao Paulo.jpg"},
        {ciudad:"Cartagena", dir:"./assets/Cartagena.jpg"}
    ],
    [
        {ciudad:"Ámsterdam", dir:"./assets/amsterdam.jpg"},
        {ciudad:"Lisbon", dir:"./assets/Lisboa.jpg"},
        {ciudad:"Rome", dir:"./assets/roma.jpg"},
        {ciudad:"Prague", dir:"./assets/praga.jpg"}
    ],
    [
        {ciudad:"Seoul", dir:"./assets/seul.jpg"},
        {ciudad:"Shenzhen", dir:"./assets/shenzhen.jpg"},
        {ciudad:"Bangkok", dir:"./assets/bangkok.jpg"},
        {ciudad:"Beijing", dir:"./assets/pekin.jpg"}
    ]
];

const Carousel = () => {
    const [indiceActual,setIndiceActual]=useState(0);
    return (
        <>  
            <h4 className="tituloCar">Popular Mytineraries</h4>
            <div className="car1">
                <button onClick={ (indiceActual!==0) ? ( ()=>setIndiceActual(indiceActual-1) )
                    : (()=>setIndiceActual(2) )}><ArrowBackIosIcon/></button>

                <div className="car2 ">
                    {slides[indiceActual].map(slider=>{
                        return <div className="fotos " key={slider.ciudad} 
                        style={{
                            width:"25vw",
                            height:"30vh",
                            backgroundImage:`url("${slider.dir}")`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"cover"
                        }}>
                            <div className="nombreCiudad">{slider.ciudad}</div>
                        </div>})}
                </div>

                <button onClick={ (indiceActual!==2) ? ( ()=>setIndiceActual(indiceActual+1) )
                    : ( ()=>setIndiceActual(0) )}><ArrowForwardIosIcon/></button>
            </div>
        </>
    )
}

export default Carousel;