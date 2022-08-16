import React from "react";
import Block from './Block';

function Features() {

    return (
        <section className="features">
            <div className="row">

                <Block
                    ImgUrl='https://www.interactivebrokers.co.in/images/web/crd-low-cost.svg'
                    Name='Lowest Costs'
                />

                <Block
                    ImgUrl='https://www.interactivebrokers.co.in/images/web/crd-global-access.svg'
                    Name='Global Access'
                />

                <Block
                    ImgUrl='https://www.interactivebrokers.co.in/images/web/crd-technology.svg'
                    Name='Premier Technology'
                />

            </div>
        </section>
    )
}

export default Features;