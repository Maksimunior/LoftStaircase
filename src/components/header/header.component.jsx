import React from "react";
import { Logo, Contacts, Messengers, SocialNetworks, Menu } from "./components"; 
import "./header.styles.css"

export const Header = function() {
    return (
        <div className="header">
            <div className="container">
                <div className="header_block">
                    <Logo/>
                    <h5 className="header__text">
                        изготовление лестниц на металлокаркасев Санкт-Петербурге
                    </h5>
                    <div>
                        <Menu />
                        <div className="header__fixed">
                            <SocialNetworks/>
                            <Messengers/>
                            <Contacts/>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}