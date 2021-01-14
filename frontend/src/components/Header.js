import NavBar from "./NavBar"
const Header=()=>{
    return(
        <>
            <header style={{height:"50vh", backgroundImage: 'url("../assets/travel.jpg")',
            backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"45%"}}>
                <div>
                    <img className="fotoUsuario" src="./assets/usuario.png"></img>
                </div>
                <NavBar />
            </header>
        </>
    )
}

export default Header;