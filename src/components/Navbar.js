import Logo from "../images/logo.png" 

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={Logo} alt="logo" className="nav--logo"/>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                <div className="toggler--slider-circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

