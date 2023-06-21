import React from "react";

export const Stages = (props) => {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <div className="stages" style={{paddingLeft: `${props.text.padding}`}}>
            <div className="stages__circle"></div>
            <hr className="stages__line" style={{width: `${props.text.width}`}}/>
            <a href="#" className="stages__arrow" onClick={Click}></a>
            <div className="stages__text">
                <h5 className="stages__title">{props.text.title}</h5>
                <h5 className="stages__body">{props.text.body1}<br />{props.text.body2}</h5>
            </div>
        </div>
    )
}