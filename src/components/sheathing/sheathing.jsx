import React from "react";
import { Stages } from "./components/stages";
import "./sheathing.style.css"

const stagesArr = [
    {title: 'Замер и проектирование', body1: 'Сделаем все необходимые расчеты', body2: 'и нарисуем рабочую модель будущего каркаса лестницы', width: '300px', padding: '302px'},
    {title: 'Изготовление каркаса', body1: 'В специально оборудованном цеху', body2: 'изготовим каркас лестницы', width: '230px', padding: '470px'},
    {title: 'Доставка к объекту', body1: 'Доставим каркас лестницы на собственном', body2: 'транспорте на любой указанный Вами адрес', width: '295px', padding: '415px'},
    {title: 'Установка каркаса лестницы', body1: 'Время установки занимает от 2 до 5 часов,', body2: 'все зависит от сложности металлического каркаса лестницы', width: '326px', padding: '270px'},
]

export const Sheathing = () => {
    return (
        <div className="sheathing">
            <img src="./assets/sheathing-stairs.png" alt="Перила" className="sheathing__icon_perila"/>
            <div className="container">
                <giv className="sheathing__group_title">
                    <h2>Как мы</h2>
                    <h2 className="title-background">производим</h2>
                    <h2>лестницу</h2>
                </giv>
                <div className="sheathing__stages">
                    {stagesArr.map((stagesArr, index) => 
                        <Stages key={index} text={stagesArr} />
                    )}
                </div>
            </div>
        </div>
    )
}