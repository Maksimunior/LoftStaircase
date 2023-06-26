import React from "react";
import Logo from "./components/header.logo";
import { SocialNetworks } from "../social.networks";
import Messengers from "../messengers";
import Contacts from "./components/conctacts";
import "./header.styles.css"

const Header = function() {
    return (
        <div className="container">
            <div className="header">
                <Logo/>
                <h5 className="header__text">
                    изготовление лестниц на металлокаркасев Санкт-Петербурге
                </h5>
                <SocialNetworks/>
                <Messengers/>
                <Contacts/>
            </div>  
        </div>
    )
}

export default Header;