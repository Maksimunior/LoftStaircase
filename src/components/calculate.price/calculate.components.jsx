import React from "react";
import "./calculate.styles.css";

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="container">
                <h2 className="title-calculator">
                    Рассчитать стоимость лестницы
                    <h2 className="title-backgraund">за 1 минуту</h2>
                </h2>
                <div className="groups-calculator">
                    <img src="/assets/stairs.png" alt="Сходи" />
                    <div ><div className="n"><hr className="line-calculator" /></div>
                        <div className="calculator-price">  
                            <div className="field1">
                                <label><h6 className="text-field1">Выберите окружение</h6></label>
                                <select name="user_profile_color_1">
                                    <option value="1">Вагонка</option>
                                    <option value="2">Кирпич</option>
                                </select>
                            </div>
                            <div className="field1">
                                <label><h6 className="text-field1">Выберите окружение</h6></label>
                                <select name="user_profile_color_1">
                                    <option value="1">
                                        Лестница закрытого типа с забежными ступенями
                                        </option>
                                    <option value="2">
                                        Лестница закрытого типа с забежными ступенями
                                    </option>
                                </select>
                            </div>
                            <div className="gender">
                                <label className="radio">
                                    <input type="radio" name="gender" value="male" />
                                    <i></i>  Есть большой выбор различных цветов.
                                    Просто сообщите менеджеру, какой цвет вы хотите видеть
                                </label>
                            </div>
                            <div className="check">
                                <label>Перила:</label>
                                <label className="radio">
                                    <input type="radio" name="gender" value="male" />
                                    <i></i>  Да
                                </label>
                                <label className="radio">
                                    <input type="radio" name="gender" value="male" />
                                    <i></i> Нет
                                </label>
                            </div>
                            <div className="check check2">
                                <label>Ступени:</label>
                                <label className="radio">
                                    <input type="radio" name="gender" value="male" />
                                    <i></i>  Да
                                </label>
                                <label className="radio">
                                    <input type="radio" name="gender" value="male" />
                                    <i></i> Нет
                                </label>
                            </div>
                            <div className="text-field">
                                <laber><h6 className="field-title">Высота (от пола до пола)</h6></laber>
                                <input type="text" name="heigh" value="200 мм" required />
                            </div>
                            <div className="text-field text-field2">
                                <laber><h6 className="field-title">Ширина</h6></laber>
                                <input type="text" name="heigh" value="1 200 мм" required />
                            </div>
                            <div className="buttton-calculate">
                                <input type="text" name="number" placeholder="номер телефона" className="fone-calculate" required />
                                <button className="will-order" ><h6 className="text-will-order">ЗАКАЗАТЬ</h6><a href="#" className="icon-will-order" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
