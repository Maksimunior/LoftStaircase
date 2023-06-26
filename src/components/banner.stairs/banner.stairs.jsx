import React from "react";
import { FormBanner } from "../form.banner";
import "./banner.stairs.style.css"

export const BannerStairs = () => {
    return (
        <div className="container">
            <div className="banner-stairs">
                <div className="banner-stairs__form">
                    <div className="banner-stairs__group_title">
                        <h2>Не уверены</h2>
                        <h2 className="text-fone">в выборе</h2>
                        <h2>лестницы?</h2>
                    </div>
                    <div className="banner-stairs__group_paragraph">
                        <h5 className="button-stairs__paragraph1">Закажите бесплатный выезд замерщика, при оформлении договора</h5>
                        <h5 className="button-stairs__paragraph">на месте получите </h5>
                        <h5 className="button-stairs__paragraph text-fone">3D проект в подарок!</h5>
                    </div>
                    <FormBanner />
                </div>
                <img src="./assets/banner_stairs.png" alt="Ступеньки" className="banner-stairs__icon" />
            </div>
        </div>
    )
}