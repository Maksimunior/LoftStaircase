import React from "react";

const GroupAdvantages = (props) => {
    return (
        <div className="advantages">
            <a href="#" className="link-advanteges"></a>
            <div>
                <h5 className="title-advanteges">{props.info.title}</h5>
                <h5 className="text-advanteges">{props.info.body}</h5>
            </div>
        </div>
    )
}

export default GroupAdvantages;