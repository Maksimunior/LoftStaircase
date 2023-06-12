import React, { useState } from "react";
import GroupAdvantages from "./components/group.advantages";
import "./advantages.style.css"

const Advantages = function() {
    const [infos, setInfo] = useState([
        {title: '10 лет', body: 'гарантии'}, 
        {title: '548 этажей', body: 'лестниц установлено'},
        {title: 'точно в срок', body: 'описание в два слова'},
        {title: 'из европы', body: 'описание в два слова'}
    ])
    return (
        <div className="container">
            <div className="group-advantages">
                {infos.map(info => 
                    <GroupAdvantages info={info}/>
                )}  
            </div>
            <hr className="advantages-line"/>
        </div>
    )
}

export default Advantages;