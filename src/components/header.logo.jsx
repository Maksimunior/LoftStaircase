import React from "react";
import logotype from "./icons/logo.svg"

export const Logo = function() {
    return (
        <div className="logo_wraper">
            <img src={logotype} alt="Логотоип" />
        </div>
    )
}

