
const Logo=()=>{
    return (
        <>
            <div className="logo" style={{
                backgroundImage:'url("./assets/1.png")',
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center", 
                width: "50%",
                height: "30vh"}}>
            </div>
            <div className="logoTexto">
                <div style={{width:"50%",backgroundImage:"url('./assets/Screenshot_1.png')",
                    backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPositionX:"50%"}}>
                </div>
                <div className="textoLogo">
                    <h4>Find your perfect trip,<br></br> designed by insiders <br></br>who know and love<br></br> their cities</h4>
                </div>
                
            </div>
        </>
    )
}
export default Logo;