import React, { useEffect, useState } from "react";

function Aspects() {

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
            <section className="coast-effective">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5">
                            <img className="cost-img" src="https://www.interactivebrokers.co.in/images/web/home-low-cost.jpg" />
                        </div>
                        <div className="col-12 col-lg-6 coast-content">
                            <h2 style={{ fontWeight: "300" }}>
                                Experience the Lowest Costs <br /> in the Industry
                            </h2>
                            <ul className="coast-ul">
                                <li>
                                    Low commissions with no added spreads, ticket charges, platform fees, or account minimums
                                </li>
                                <li>
                                    IB SmartRoutingSM helps support best execution by searching for the best available prices for stocks, options and combinations across exchanges and dark pools.
                                </li>
                                <li>
                                    Margin rates up to 66% lower than the industry.
                                </li>
                                <li>
                                    Earn extra income on your lendable shares
                                </li>
                            </ul>
                            <button className="btn btn-log btn-coast">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map" style={{ margin: "30px auto 50px" }}>
                <div className="container map-container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4 coast-content">
                            <h2 style={{ fontWeight: "300" }}>
                                Discover a World of <br /> Opportunities
                            </h2>
                            <p className="map-para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="figures">
                                <div className="row">
                                    <div className="col">
                                        <h2>150</h2>
                                        <p className="mini">Markets</p>
                                    </div>
                                    <div className="col">
                                        <h2>33</h2>
                                        <p className="mini">Countries</p>
                                    </div>
                                    <div className="col">
                                        <h2>24</h2>
                                        <p className="mini">Currencies</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-log btn-coast btn-map">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="map-img">
                                <img style={{ width: "100%" }} src={width > 575 ? "https://i.postimg.cc/1twdcYLQ/Capture2.png" : "https://i.postimg.cc/sXNTcGQ6/Capture2.png"} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="coast-effective security">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5">
                            <img className="cost-img" src="https://www.interactivebrokers.co.in/images/web/home-security.jpg" />
                        </div>
                        <div className="col-12 col-lg-6 coast-content">
                            <h2 style={{ fontWeight: "300" }}>
                                A Broker You Can Trust
                            </h2>
                            <p className="map-para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <ul className="coast-ul">
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </li>
                                <li>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                            </ul>
                            <button className="btn btn-log btn-coast">IBKR Protection</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aspects;