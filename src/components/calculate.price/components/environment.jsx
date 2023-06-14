import React from "react";

export const Environment = ({ onChange, name, value }) => {
  const handleChange = (event) => {
    onChange(event, name);
  };

  return (
    <div>
      <label>
        <h6 className="text-field1">Выберите окружение</h6>
      </label>
      <select
        name="user_profile_color_1"
        className="mani"
        value={value}
        onChange={handleChange}
      >
        <option value="Вагонка">Вагонка</option>
        <option value="Кирпич">Кирпич</option>
      </select>
      <hr />
    </div>
  );
};

