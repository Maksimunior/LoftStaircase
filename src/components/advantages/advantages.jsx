import React from "react";
import { GroupAdvantages } from "./components/group.advantages";
import "./advantages.style.css"

const infos = [
    {title: '10 лет', body: 'гарантии'}, 
    {title: '548 этажей', body: 'лестниц установлено'},
    {title: 'точно в срок', body: 'описание в два слова'},
    {title: 'из европы', body: 'описание в два слова'}
]

export const Advantages = function() {
    return (
        <div className="container">
            <div className="group-advantages">
                {infos.map((info, index) => 
                    <GroupAdvantages key={index} info={info}/>
                )}  
            </div> 
            <hr className="advantages-line"/>
        </div>
    )
}