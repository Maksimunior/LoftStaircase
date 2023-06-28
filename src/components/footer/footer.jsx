import React from "react";
import { Logo, Contacts, Messengers, SocialNetworks } from "./components"; 
import "./footer.style.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="header">
                <div className="container">
                    <div className="header_block2">
                        <Logo />
                        <h5 className="header__text">
                            изготовление лестниц на металлокаркасев Санкт-Петербурге
                        </h5>
                        <SocialNetworks />
                        <Messengers />
                        <Contacts />
                    </div>  
                </div>
            </div>
            <div className="container">
                <div className="footer__text">
                    <h6 className="footer__text-backgraund">Политика конфиденциальности</h6>
                    <h6 className="footer__text-backgraund">Разработка и продвижение SilverDuck</h6>
                </div>
            </div>
        </div>
    )
}