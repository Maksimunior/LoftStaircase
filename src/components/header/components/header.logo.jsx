import React from "react";
import logotype from "../icons/logo.svg"

const Logo = function() {
    return (
        <div className="logo_wraper">
            <img src={logotype} alt="Логотоип" />
        </div>
    )
}

export default Logo;