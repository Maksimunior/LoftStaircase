import React from "react";

export const FiledHeight = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div className="text-field">
            <laber><h6 className="field-title">Ширина:</h6></laber>
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
