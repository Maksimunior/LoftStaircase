import React from "react";

export const CheckStairs = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div 
          className="check" 
          value={value}
          onChange={handleChange}
        >
            <label><h6 className="text-field1">Ступени:</h6></label>
            <label className="radio" >
                <input type="radio" name="stairs" value="Да" />
                <i></i>  Да 
            </label>
            <label className="radio" >
                <input type="radio" name="stairs" value="Нет" />
                <i></i> Нет
            </label>
        </div>
    )
}
