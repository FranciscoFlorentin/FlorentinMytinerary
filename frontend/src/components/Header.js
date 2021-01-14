import NavBar from "./NavBar"
const Header=()=>{
    return(
        <>
            <header className="row">
                <div className="col s9 ">
                    <img className="logo" src="./assets/usuario.jpg"></img>
                </div>
                <div className="col s3">
                    <NavBar />
                </div>
            </header>
        </>
    )
}

export default Header;