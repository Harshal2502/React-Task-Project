import React from "react";

function CarouselItem(props) {

    const customClass1 = "carousel-item active container item-1"
    const customClass2 = "carousel-item container item-2"
    const customClass3 = "carousel-item container item-3"

    return (
            <div className={props.item === "first" ? customClass1 : props.item === "second" ? customClass2 : customClass3}>
                <div className='heading-class'>
                    <h1>{props.heading}</h1>
                    <p>{props.para}</p>
                    <button className={props.button}>Learn More</button>
                </div>
            </div>
    )
}

export default CarouselItem;