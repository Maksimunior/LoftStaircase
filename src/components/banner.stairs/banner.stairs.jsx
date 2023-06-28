import React from "react";
import { BannerParagraph, BannerTitle, FormBanner } from "./components";
import "./banner.stairs.style.css"

export const BannerStairs = () => {
    return (
        <div className="container">
            <div className="banner-stairs">
                <div className="banner-stairs__form">
                    <BannerTitle />
                    <BannerParagraph />
                    <FormBanner />
                </div>
                <img src="./assets/banner_stairs.png" alt="Ступеньки" className="banner-stairs__icon" />
            </div>
        </div>
    )
}