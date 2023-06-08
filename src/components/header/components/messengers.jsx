import React from "react";
import divider from "../icons/divider.svg";

const Messengers = function() {
    return (
        <div className="messengers">
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

export default Messengers;