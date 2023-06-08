import React from "react";

const Introduction = function() {
    return (
        <div className="video-plyer">
            {/* <div>
                <video width="126px" height="95px" controls>
                    <source src="https://youtu.be/F0FNGDuIxlE" type="video/mp4" />
                </video>
            </div> */}
            <a href="https://youtu.be/F0FNGDuIxlE" target="_blank"><img src="/assets/production_video.png" alt="Відеоплеєр" className="video-link" /></a>
            <h6 className="text-video">смотреть видео о нашем производстве</h6>
        </div>
    )
}
export default Introduction;