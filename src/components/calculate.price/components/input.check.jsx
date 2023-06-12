import React from "react";

const Check = (props) => {
    return (
        <div className="check">
        <label><h6 className="text-field1">{props.check.title}</h6></label>
        <label className="radio">
            <input type="radio" name={props.check.name} value="male" />
            <i></i>  {props.check.body[0]}
        </label>
        <label className="radio">
            <input type="radio" name={props.check.name} value="male" />
            <i></i> {props.check.body[1]}
        </label>
    </div>
    )
}

export default Check;