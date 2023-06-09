import React from "react";

const GroupAdvantages = (procs) => {
    return (
        <div className="advantages">
            <a href="#" className="link-advanteges"></a>
            <div>
                <h5 className="title-advanteges">{procs.info.title}</h5>
                <h5 className="text-advanteges">{procs.info.body}</h5>
            </div>
        </div>
    )
}

export default GroupAdvantages;