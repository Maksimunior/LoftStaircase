import React, { useState } from "react";
import DropDownList from "./components/drop.down.list";
import AdditionalColors from "./components/additional.colors";
import Check from "./components/input.check";
import TextFiled from "./components/text.field";
import Button from "./components/button";
import Modal from "./components/modal";
import "./calculate.styles.css";

const Calculator = () => {
    const [modalActive, setModalActive] = useState(false)
    const [checked1, setChecked1] = useState(true)
    const [checked2, setChecked2] = useState(true)
    console.log('modalActive')
    const [lists, setList] = useState([
        {title: 'Выберите окружение', body: ['Вагонка', 'Кирпич']}, 
        {title: 'Выберите окружение', body: ['Лестница закрытого типа с забежными ступенями', 'Лестница открытого типа с забежными ступенями']}, 
    ])
    const [checks, setCheck] = useState([
        {title: 'Перила:', body: ['Да', 'Нет'], name: 'railing'}, 
        {title: 'Ступени:', body: ['Да', 'Нет'], name: 'stairs'}, 
    ])
    const [fields, setField] = useState([
        {title: 'Высота (от пола до пола):', placeholder: '200 мм'},
        {title: 'Ширина:', placeholder: '1 200 мм'},
    ])
    return (
        <div className="calculator">
            <div className="container">
                <h2 className="title-calculator">
                    Рассчитать стоимость лестницы
                    <h2 className="title-backgraund">за 1 минуту</h2>
                </h2>
                <div className="groups-calculator">
                    <img src="/assets/stairs.png" alt="Сходи" />
                    <div ><div className="calculator__line"><hr className="line-calculator" /></div>
                        <form >
                            <div className="calculator-price"> 
                                {lists.map( list =>
                                    <DropDownList list = {list} />
                                )}
                                <AdditionalColors />
                                {checks.map( check => 
                                    <Check check = {check} checked1={checked1} checked2={checked2} setChecked1={setChecked1} setChecked2={setChecked2} />
                                )}
                                {fields.map( field => 
                                    <TextFiled field = {field} />
                                )}
                                <Button setModalActive={setModalActive}/>
                                <Modal  active={modalActive} setActive={setModalActive} />
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
