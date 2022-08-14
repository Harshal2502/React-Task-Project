import React, { useEffect, useState } from "react";

function Navbar0() {

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark nav-top">
                <div className="top-div-1">
                    <ul className="navbar-nav">
                        <li class="dropdown nav-item top-item">
                            <a class="nav-top top-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="">
                                For Individuals
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">India Markets</a></li>
                                <li><a class="dropdown-item" href="#">Individual, Joint or IRA</a></li>
                                <li><a class="dropdown-item" href="#">Global Markets</a></li>
                                <li><a class="dropdown-item" href="#">Family Advisors</a></li>
                            </ul>
                        </li>
                        <li class="dropdown nav-item top-item">
                            <a class="nav-top top-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="">
                                For Institutions
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
                        <li class="dropdown nav-item top-item">
                            <a class="nav-top top-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="">
                                About Us
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
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