import React from "react";

export const SocialNetworks = function() {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <div className="social_networks" onClick={Click}>
            <a href="#" className="vk"></a>
            <a href="#" className="instagram"></a>
        </div>
    )
}