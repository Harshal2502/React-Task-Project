import React from "react";

function Navbar0() {

    return (
        <div className="">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav-top">
                <div className="top-div-1">
                    <ul className="navbar-nav">
                        <li className="dropdown nav-item top-item">
                            <a className="nav-top top-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                                For Individuals
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/">Lorem ipsum</a></li>
                                <li><a className="dropdown-item" href="/">dolor sit amet</a></li>
                                <li><a className="dropdown-item" href="/">consectetur adipiscing</a></li>
                                <li><a className="dropdown-item" href="/">sed do eiusmod</a></li>
                            </ul>
                        </li>
                        <li className="dropdown nav-item top-item">
                            <a className="nav-top top-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                                For Institutions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/">Lorem ipsum</a></li>
                                <li><a className="dropdown-item" href="/">dolor sit amet</a></li>
                                <li><a className="dropdown-item" href="/">consectetur adipiscing</a></li>
                                <li><a className="dropdown-item" href="/">sed do eiusmod</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="top-div-2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item top-item" href='/'>
                            FREE TRIAL
                        </li>
                        <li className="nav-item top-item" href='/'>
                            Careers
                        </li>
                        <li className="dropdown nav-item top-item">
                            <a className="nav-top top-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                                About Us
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/">Lorem ipsum</a></li>
                                <li><a className="dropdown-item" href="/">dolor sit amet</a></li>
                                <li><a className="dropdown-item" href="/">consectetur adipiscing</a></li>
                                <li><a className="dropdown-item" href="/">sed do eiusmod</a></li>
                            </ul>
                        </li>
                        <li className="nav-item top-item" href='/'>
                            Support
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar0;