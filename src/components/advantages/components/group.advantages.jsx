import React from "react";

export const GroupAdvantages = (props) => {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <div className="advantages">
            <a href="#" className="link-advanteges" onClick={Click}></a>
            <div>
                <h5 className="title-advanteges">{props.info.title}</h5>
                <h5 className="text-advanteges">{props.info.body}</h5>
            </div>
        </div>
    )
}