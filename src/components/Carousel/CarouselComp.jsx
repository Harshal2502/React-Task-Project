import React from "react";

function CarouselComp(props) {

    return (
        <div className={props.item === "first" ? 'container-md' : props.item === "second" ? 'container-md-1' : ""}>
            <div className='md-content'>
                <h1 className='md-heading'>{props.heading}</h1>
                <p>{props.para}</p>
                <button className='btn btn-md-1'>Learn More</button>
            </div>
        </div>
    )
}

export default CarouselComp;