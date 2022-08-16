import React, { useEffect, useState } from 'react'

function Block(props) {

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
            <div className="col-lg-4 box">
                <img className="feature-img" src={props.ImgUrl} alt="Block" />
                <h5 className="w700">{props.Name}</h5>
                <p className={width > 991 ? "par" : "par-md"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </>
    )
}

export default Block;