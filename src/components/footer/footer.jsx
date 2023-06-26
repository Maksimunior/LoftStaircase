import React from "react";
import Header from "../header/header.component";
import "./footer.style.css"

export const Footer = () => {
    return (
        <div className="footer">
            <Header />
            <div className="container">
                <div className="footer__text">
                    <h6 className="footer__text-backgraund">Политика конфиденциальности</h6>
                    <h6 className="footer__text-backgraund">Разработка и продвижение SilverDuck</h6>
                </div>
            </div>
        </div>
    )
}