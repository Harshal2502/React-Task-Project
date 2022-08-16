import React from "react";

function Award(props) {

    const customStyle = {
        justifyContent: "center",
        display: "flex",
        minHeight: "174px"
    }

    return (
        <div className="col-12 col-md-4 col-lg-2 award">
            <div className="award-img-div" style={customStyle}>
                <img className={props.flag == "middle" ? "style2 awardImage" : "awardImage"} src={props.source} />
            </div>
            <div className="awardText">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Award;