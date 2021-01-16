import NavBar from "./NavBar"
const Header=()=>{
    return(
        <>
            <header style={{height:"50vh", backgroundImage: 'url("../assets/travel.jpg")',
            backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"45%"}}>
                <div className="divHeader">
                    <div>
                        <img className="fotoUsuario" alt="" src="./assets/usuario.png"></img>
                    </div>
                <NavBar />
                </div>
            </header>
        </>
    )
}

export default Header;