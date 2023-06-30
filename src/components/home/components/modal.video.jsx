import React from "react";

export const ModalVodeo = ({active, setModalActive}) => {
    return (
        <div className={active ? "modal-video active" : "modal-video"} onClick={() => setModalActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F0FNGDuIxlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

