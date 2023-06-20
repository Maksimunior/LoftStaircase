import React from "react";

export const FiledHeight = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div className="text-field">
            <label><h6 className="field-title">Ширина:</h6></label>
            <div>
                <input 
                  type="text" 
                  name="heigh" 
                  className="text-field" 
                  required 
                  value={value}
                  onChange={handleChange}
                /><hr />
            </div> 
        </div>
    )
}
