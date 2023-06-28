import React from "react";
import { TextBanner, FormBanner } from "./components";
import "./banner.style.css"

export const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="banner__block_form">
                    <TextBanner />
                    <FormBanner />
                </div>
                <img src="./assets/banner.png" alt="Банер"/>
            </div>
        </div>
    )
}