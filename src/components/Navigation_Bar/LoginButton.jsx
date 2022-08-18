import React from "react";
import { useAuth0} from '@auth0/auth0-react'

function LoginButton(props) {

    const { loginWithRedirect } = useAuth0();

    return (
        <button className={props.text == "Log In" ? "btn btn-log" : "btn btn-acc"} onClick={() => loginWithRedirect()}>
           { props.text }
        </button>
    )
}

export default LoginButton;