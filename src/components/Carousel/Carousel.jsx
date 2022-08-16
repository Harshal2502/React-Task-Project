import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';
import IndicatorButton from './IndicatorButton';
import CarouselComp from './CarouselComp';

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

                            <IndicatorButton number="first" />
                            <IndicatorButton number="second" />
                            <IndicatorButton number="third" />

                        </div>

                        <div className="carousel-inner">

                            <CarouselItem 
                                item="first"
                                heading="Interactive Brokers clients earn up to USD 1.83% on their idle cash balances*"
                                para="*Restrictions apply. Click here to know more"
                                button="btn btn-md-1"
                            />

                            <CarouselItem 
                                item="second"
                                heading="Put the World in the Palm of Your Hand with IBKR GlobalTrader"
                                para="Deposit in your local currency and trade global stocks from phone"
                                button="btn custom-btn"
                            />

                            <CarouselItem 
                                item="third"
                                heading="Interactive Brokers:Rated Lowest Margin Fees1 by StockBrokers.com"
                                para="IBKR charges margin loan rates from 2.83% to 3.83% USD"
                                button="btn btn-3"
                            />
                            
                        </div>
                    </div>
                </section> :

                <div className='temp-class2'>

                    <CarouselComp 
                        item="first" 
                        heading="Interactive Brokers clients earn up to USD 1.83% on their idle cash balances*"
                        para="*Restrictions apply. Click here to know more"    
                    />

                    <div className='row' style={customStyle}>
                        <div className='col-9'>
                            <img style={{ maxWidth: "80%" }} src='https://www.interactivebrokers.co.in/images/web/hero-banner-home-ibkr-gt.png' alt='Phone pic'></img>
                        </div>
                        <div className='col-9 custom-content'>
                            <h1 className='md-heading'>Put the World in the Palm of Your Hand with IBKR GlobalTrader</h1>
                            <p>Deposit in your local currency and trade global stocks from phone</p>
                            <button className='btn custom-btn '>
                                Learn More
                            </button>
                        </div>
                    </div>
                    
                    <CarouselComp 
                        item="second" 
                        heading="Interactive Brokers: Rated Lowest Margin Fees1 by StockBrokers.com"
                        para="IBKR charges margin loan rates from 2.83% to 3.83% USD"    
                    />

                </div>
            }
        </>
    )
}

export default Carousel;