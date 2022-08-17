import React from "react";

function Step(props){

    return(
        <div className="col-12 col-md-4 step-div">
            <h4>{props.step == 1 ? "STEP 1" : props.step == 2 ? "STEP 2" : "STEP 3"}</h4>
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
        </div>
    )
}

export default Step;