import React from "react";
import Award from "./Award";

function Awards() {

    const customStyle = {
        margin: "0 5%",
        justifyContent: "center"
    }

    const customStyleBtn = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "3% auto"
    }

    return (
        <div style={{ display: "grid" }}>
            <h4 className="awardTitle">AWARD WINNING PLATFORM & SERVICES</h4>
            <div className="row" style={customStyle}>
                <Award
                    source="https://www.interactivebrokers.co.in/images/web/2022_sb-badge-1-professional-trading.png"
                    text="#1 Professional Trading"
                />
                <Award
                    source="https://www.interactivebrokers.co.in/images/2015/award-benzinga-best-trading-tech-2020.png"
                    text="2020 Benzinga Best Trading Technology"
                />
                <Award
                    source="https://www.interactivebrokers.co.in/images/web/award-barrons-2022-best-online-broker-crop.png"
                    text="#1 Best Online Broker 5 out of 5 stars"
                    flag="middle"
                />
                <Award
                    source="https://www.interactivebrokers.co.in/images/web/awards-investopedia-2022-General.png"
                    text="4.6 out of 5 stars Overall "
                />
                <Award
                    source="https://www.interactivebrokers.co.in/images/2015/award-nw-2020-crop.png"
                    text="Best Broker for Low-Cost Investing"
                    flag="middle"
                />
            </div>
            <div style={customStyleBtn}>
                <button className="btn btn-log btn-award">See All Awards</button>
            </div>

        </div>
    )
}

export default Awards;