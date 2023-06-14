import React from "react";

export const EnvType = ({ onChange, name, value }) => {
    const handleChange = (event) => {
        onChange(event, name);
    };
    return (
        <div>
        <label><h6 className="text-field1">Выберите окружение</h6></label>
        <select 
          name="user_profile_color_1" 
          className="mani" 
          value={value}
          onChange={handleChange}
        >
          <option value="Лестница закрытого типа с забежными ступенями">Лестница закрытого типа с забежными ступенями</option>
          <option value="Лестница открытого типа с забежными ступенями">Лестница открытого типа с забежными ступенями</option>
        </select><hr />
    </div>
    )
}
