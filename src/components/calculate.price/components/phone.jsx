import React from "react";

export const Phone = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div className="buttton-calculate">
            <input 
              type="text" 
              name="number" 
              placeholder="номер телефона" 
              className="fone-calculate" 
              required
              value={value}
              onChange={handleChange} 
            />
        </div>
    )
}