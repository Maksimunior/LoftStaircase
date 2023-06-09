import React from "react";
import './header.styles.css'
import Logo from "./components/header.logo";
import SocialNetworks from "./components/social.networks";
import Messengers from "./components/messengers";
import Contacts from "./components/conctacts";


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