import React from "react";
import { TextBanner } from "./components/text.banner";
import { FormBanner } from "./components/form.banner";
import "./banner.style.css"

export const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="banner__block_form">
                    <TextBanner />
                    <FormBanner />
                </div>
                <img src="./assets/banner.png" alt="Банер" className="banner__icon" />
            </div>
        </div>
    )
}