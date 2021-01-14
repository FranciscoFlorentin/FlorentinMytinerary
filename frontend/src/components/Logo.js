
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
            <div style={{display:"flex"}}>
                <div style={{width:"50%",backgroundImage:"url('./assets/Screenshot_1.png')",
                    backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPositionX:"50%"}}>
                </div>
                <h4 class="textoLogo" style={{alignContent:"right", width:"50%", textAlign:"right", padding:""}}>Find your perfect trip,<br></br> designed by insiders <br></br>who know and love<br></br> their cities</h4>
            </div>
        </>
    )
}
export default Logo;