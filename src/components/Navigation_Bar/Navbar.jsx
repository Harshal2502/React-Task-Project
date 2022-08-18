import React, { useEffect, useState } from "react";
import LI from './Listitem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Navbar0 from './Navbar0';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Navbar(props) {

    const { user, isAuthenticated } = useAuth0();

    const Logo_1_Link = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Interactive_Brokers_Logo_%282014%29.svg/2560px-Interactive_Brokers_Logo_%282014%29.svg.png";
    const Logo_2_Link = "https://i.postimg.cc/x86TNX4Q/Capture2.png"
    const Home_Link = "/"

    const customStyle = {
        boxShadow: "0px 0.5px 2px 0px rgba(0, 0, 0, 0.333)"
    }

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <>
            {width > 991 && <Navbar0 />}

            <div className={width > 991 ? "container fixed-top-1 container1" : "container fixed-top container1"}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <a className="navbar-brand" href={Home_Link}><img className={width > 575 && "logo"} src={width > 575 ? Logo_1_Link : Logo_2_Link} alt="logo"></img></a>
                    <div className="special-div">
                        {width < 991 && !isAuthenticated && <LoginButton text="Log In" />}
                        {width < 991 && !isAuthenticated && <LoginButton text="Open Account" />}
                        {width < 991 && isAuthenticated && <h2 className="auth-h2">Hello, {user.given_name}</h2>}
                        {width < 991 && isAuthenticated && <LogoutButton />}
                    </div>

                    <button className="navbar-toggler btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><MenuIcon /></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="navbarSupportedContent">
                        <div className="offcanvas-header" style={customStyle}>
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><a className="navbar-brand" href={Home_Link}><img className="logo" src={Logo_1_Link} alt="logo"></img></a></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <ul className={width > 991 ? "navbar-nav ms-auto" : "navbar-nav"}>

                            {width < 991 && (<li className="nav-item nav-item-md">
                                <a className="nav-link main-item" href="/">Portal Login</a>
                            </li>)}
                            {width < 991 && (<li className="nav-item nav-item-md">
                                <a className="nav-link main-item" href="/">Create Account</a>
                            </li>)}


                            <LI title='Why IBKR' />
                            <LI title='Pricing' />
                            <LI title='Trading' />
                            <LI title='Services' />
                            <LI title='Education' />

                            {width < 991 && <LI title='About Us' />}
                            {width < 991 && <LI title='Support' />}


                            {width > 991 ? (<li>
                                <a className="nav-link" href="/"><SearchIcon /></a>
                            </li>) : <></>}

                        </ul>
                    </div>

                    {width > 991 && !isAuthenticated && <LoginButton text="Log In" />}
                    {width > 991 && !isAuthenticated && <LoginButton text="Open Account" />}
                    {width > 991 && isAuthenticated && <h2 className="auth-h2">Hello, {user.given_name}</h2>}
                    {width > 991 && isAuthenticated && <LogoutButton />}
                </nav>
            </div>
        </>
    )
}

export default Navbar;