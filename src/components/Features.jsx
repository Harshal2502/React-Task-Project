import React from "react";

function Features() {

    return (
        <section className="features">
            <div className="row">

                <div className="col-lg-4 box">
                    <img className="feature-img" src="https://www.interactivebrokers.co.in/images/web/crd-low-cost.svg" alt="Image" />
                    <h5 className="w700">Lowest Costs</h5>
                    <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>

                <div className="col-lg-4 box">
                    <img className="feature-img" src="https://www.interactivebrokers.co.in/images/web/crd-global-access.svg" alt="Image" />
                    <h5 className="w700">Global Access</h5>
                    <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>

                <div className="col-lg-4 box">
                    <img className="feature-img" src="https://www.interactivebrokers.co.in/images/web/crd-technology.svg" alt="Image" />
                    <h5 className="w700">Premier Technology</h5>
                    <p className=" par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>

            </div>
        </section >
    )
}

export default Features;