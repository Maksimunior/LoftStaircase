import React from "react";

export const Introduction = function(props) {
    return (
        <div className="video-plyer" {...props}>
            <img src="/assets/production_video.png" alt="Відеоплеєр" className="video-link" />
            <h6 className="text-video">смотреть видео о нашем производстве</h6>
        </div>
    )
}