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
        {ciudad:"Lisboa", dir:"./assets/Lisboa.jpg"},
        {ciudad:"Roma", dir:"./assets/roma.jpg"},
        {ciudad:"Praga", dir:"./assets/praga.jpg"}
    ],
    [
        {ciudad:"Seúl", dir:"./assets/seul.jpg"},
        {ciudad:"Shenzhen", dir:"./assets/shenzhen.jpg"},
        {ciudad:"Bangkok", dir:"./assets/bangkok.jpg"},
        {ciudad:"Pekín", dir:"./assets/pekin.jpg"}
    ]
];

const Carousel = () => {
    const [indiceActual,setIndiceActual]=useState(0);
    return (
        <>  
            <h4 style={{textAlign:"center"}}>Popular Mytineraries</h4>
            <div className="car1">
                <button onClick={ (indiceActual!==0) ? ( ()=>setIndiceActual(indiceActual-1) )
                    : (()=>setIndiceActual(2) )}><ArrowBackIosIcon/></button>

                <div className="car2 container">
                    {slides[indiceActual].map(slider=>{
                        return <div className="fotos col s6" key={slider.ciudad} 
                        style={{
                            width:"20vw",
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