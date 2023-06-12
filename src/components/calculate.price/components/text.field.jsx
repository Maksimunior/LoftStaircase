import React from "react";

const TextFiled = (props) => {
    return (
        <div className="text-field">
            <laber><h6 className="field-title">{props.field.title}</h6></laber>
            <div>
                <input type="text" name="heigh" placeholder={props.field.placeholder} className="text-field" required /><hr />
            </div> 
        </div>
    )
}

export default TextFiled;