import React from "react";

const AdditionalColors = function() {
    return (
        <div className="colors">
            <label className="radio">
                <input type="radio" name="colors" value="male" />
                <i></i>  <h6 className="text-field1">Есть большой выбор различных цветов.<br />
                Просто сообщите менеджеру, какой цвет вы хотите видеть</h6>
            </label>
        </div>
    )
}

export default AdditionalColors;