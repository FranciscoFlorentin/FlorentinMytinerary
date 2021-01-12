const Header=()=>{
    return(
        <>
            <header className="row">
                <div className="col s8 ">
                    <img className="logo" src="https://e7.pngegg.com/pngimages/536/90/png-clipart-black-logo-computer-icons-user-profile-login-avatar-description-heroes-monochrome-thumbnail.png"></img>
                </div>
                <nav className="col s4 nav-wrapper">
                    <div className="container">
                        <a href="#" data-target="menu-responsive" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                        <ul id="menu-responsive" className="sidenav">
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;