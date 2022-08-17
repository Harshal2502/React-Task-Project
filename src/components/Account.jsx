import React from "react";

function Account(props) {

    return (
        <div className="col-6 col-md-2 account-div">
            <div>
                <a href="/">
                    <img className="account-img" src={props.imgUrl} alt="Account-Img" />
                    <p>{props.text}</p>
                </a>
            </div>
        </div>
    )
}

export default Account;