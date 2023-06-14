import React from "react";

export const CheckPerila = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div 
          className="check" 
          value={value}
          onChange={handleChange}
        >
            <label><h6 className="text-field1">Перила:</h6></label>
            <label className="radio">
                <input type="radio" name="perila" value="Да" />
                <i></i>  Да
            </label>
            <label className="radio">
                <input type="radio" name="perila" value="Нет"/>
                <i></i> Нет
            </label>
        </div>
    )
}