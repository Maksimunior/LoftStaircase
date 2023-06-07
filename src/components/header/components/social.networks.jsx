import React from "react";
import vk from "../icons/vk.svg";
import instagram from "../icons/instagram.svg";

const Social_networks = function() {
    return (
        <div className="social_networks">
            <img src={vk} alt="ВКонтакте" />
            <img src={instagram} alt="Instagram" />
        </div>
    )
}

export default Social_networks;