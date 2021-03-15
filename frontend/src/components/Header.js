import NavBar from "./NavBar"
const Header=()=>{
    return(
        <>
            <header style={{height:"50vh", backgroundImage: 'url("../assets/Balooning-in-Cappadocia-1.jpg")',
            backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"45%"}}>
                <NavBar />
                <div id="headerDiv">
                    <h1></h1>
                    <h1>WELCOME TO MYTINERARY</h1>   
                    <h2>SIGN UP</h2>
                </div>  
          
            </header>
        </>
    )
}

export default Header;