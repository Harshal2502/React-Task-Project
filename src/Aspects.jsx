import React from "react";

function Aspects() {

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

            <section className="map">
                <div className="container-fluid map-container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4 coast-content">
                            <h2 style={{ fontWeight: "300" }}>
                                Discover a World of <br /> Opportunities
                            </h2>
                            <p className="map-para">
                                Invest globally in stocks, options, futures, currencies, bonds and funds from a single unified platform. Fund your account in multiple currencies and trade assets denominated in multiple currencies. Access market data 24 hours a day and six days a week.</p>
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
                            <button className="btn btn-log btn-map">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="map-img">
                                <img src="https://i.postimg.cc/1twdcYLQ/Capture2.png" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Aspects;