import React, { useEffect, useState } from 'react';

function Listitem(props) {

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
            <li className={width<991?"nav-item-md":"nav-item"}>
                <a className="nav-link" href='/'>{props.title}</a>
            </li>
        </>
    )
}


export default Listitem;