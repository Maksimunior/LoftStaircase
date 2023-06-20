import React from "react";

export const FiledWidth = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div className="text-field">
            <label><h6 className="field-title">Высота (от пола до пола):</h6></label>
            <div>
                <input 
                  type="text"
                  className="text-field" 
                  required 
                  value={value}
                  onChange={handleChange}
                /><hr />
            </div> 
        </div>
    )
};
