import React from "react";

export const FormBanner = () => {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <div className="banner__form">
            <input type="text" name="phone" placeholder="номер телефона" className="banner__phone" required/>
            <button className="banner__button" onClick={Click}><h6>заказать доставку</h6><a href="#" className="banner__button_icon" /></button>
        </div>
    )
}