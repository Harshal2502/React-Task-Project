import React, { useEffect, useState } from 'react';

function Carousel() {

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const customStyle = {
        backgroundColor: "#f6f8f9",
        justifyContent: "center",
        margin: "5px",
        width: "96.5%",
        marginBottom: "12px"
    }

    return (
        <>
            {width > 800 ?
                <section className={width > 991 ? "carousel temp-class" : "carousel temp-class2"}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{ height: "100% !important" }}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active container item-1">
                                <div className='heading-class'>
                                    <h1>Interactive Brokers clients earn up to USD 1.83% on their idle cash balances*</h1>
                                    <button className='btn btn-md-1'>Learn More</button>
                                    <p>*Restrictions apply. For additional information on interest rates, click here.</p>
                                </div>
                            </div>
                            <div className='carousel-item container item-2'>
                                <div className='d-block w-100'>
                                    <div className="row">
                                        <div className="col-lg-6 heading-class">
                                            <h1>Put the World in the Palm of Your Hand with IBKR GlobalTrader</h1>
                                            <p>Deposit in your local currency and easily trade global stocks from your phone or tablet. </p>
                                            <button className='btn custom-btn '>
                                                Learn More
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <img className='item-2-img' src='https://www.interactivebrokers.co.in/images/web/hero-banner-home-ibkr-gt.png'>

                                            </img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item container item-3'>
                                <div className='heading-class' style={{ color: "white" }}>
                                    <h1>Interactive Brokers:Rated Lowest Margin Fees1 by StockBrokers.com</h1>
                                    <p>IBKR charges margin loan rates from USD 2.83% to USD 3.83%*</p>
                                    <button className='btn btn-3'>Learn More</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </section> :

                <div className='temp-class2'>
                    <div className='container-md'>
                        <div className='md-content'>
                            <h1 className='md-heading'>Interactive Brokers clients earn up to USD 1.83% on their idle cash balances*</h1>
                            <p>*Restrictions apply. Click here for more info.</p>
                            <button className='btn btn-md-1'>Learn More</button>
                        </div>
                    </div>
                    <div className='row' style={customStyle}>
                        <div className='col-9'>
                            <img style={{ maxWidth: "80%" }} src='https://www.interactivebrokers.co.in/images/web/hero-banner-home-ibkr-gt.png' alt='Image'></img>
                        </div>
                        <div className='col-9 custom-content'>
                            <h1 className='md-heading'>Put the World in the Palm of Your Hand with IBKR GlobalTrader</h1>
                            <p>*Deposit in your local currency and easily trade global stocks from your phone or tablet.</p>
                            <button className='btn custom-btn '>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='container-md-1'>
                        <div className='md-content'>
                            <h1 className='md-heading'>Interactive Brokers: Rated Lowest Margin Fees1 by StockBrokers.com</h1>
                            <p>IBKR charges margin loan rates from USD 2.83% to USD 3.83%*</p>
                            <button className='btn btn-md-1'>Learn More</button>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default Carousel;