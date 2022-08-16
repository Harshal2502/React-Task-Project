import React from "react";

function IndicatorButton(props) {

    const btnStyle = {
        backgroundColor: "#0167b1"
    }

    return (
        <button style={btnStyle} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={props.number === "first" ? "0" : props.number === "second" ? "1" : "2"} className={props.number === "first" && "active"} aria-current="true" aria-label={props.number === "first" ? "Slide 1" : props.number === 2 ? "Slide 2" : "Slide 3"}>

        </button>
    )
}

export default IndicatorButton;