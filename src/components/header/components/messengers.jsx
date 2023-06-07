import React from "react";
import viber from "../icons/viber.svg";
import watsapp from "../icons/watsapp.svg";
import telegram from "../icons/telegram.svg";
import divider from "../icons/divider.svg";

const Messengers = function() {
    return (
        <div className="messengers">
            <img src={watsapp} alt="WhatsApp" />
            <p>WhatsApp</p>
            <img src={divider} alt="Divider"/>
            <img src={viber} alt="Viber"/>
            <p>Viber</p>
            <img src={divider} alt="Divider"/>
            <img src={telegram} alt="Telegram"/>
            <p>Telegram</p>
        </div>
    )
}

export default Messengers;