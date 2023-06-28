import React from "react";
import divider from "./icons/divider.svg";

export const Messengers = function() {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <div className="messengers" onClick={Click}>
            <div className="animations">
                <a href="#" className="whats-app"></a>
                <p className="whats-app">WhatsApp</p>
            </div>
            <img src={divider} alt="Divider"/>
            <div className="animations">
                <a href="#" className="viber"></a>
                <p className="viber">Viber</p>
            </div>
            <img src={divider} alt="Divider"/>
            <div className="animations">
                <a href="#" className="telegram"></a>
                <p className="telegram">Telegram</p>
            </div>
        </div>
    )
}
