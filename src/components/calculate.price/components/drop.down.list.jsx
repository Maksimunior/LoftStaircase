import React from "react";

const DropDownList = (props) => {
    return (
        <div>
        <label><h6 className="text-field1">{props.list.title}</h6></label>
        <select name="user_profile_color_1" className="mani">
            <option value="1">{props.list.body[0]}</option>
            <option value="2">{props.list.body[1]}</option>
        </select><hr />
    </div>
    )
}

export default DropDownList;