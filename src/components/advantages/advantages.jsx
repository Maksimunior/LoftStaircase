import React from "react";
import GroupAdvantages from "./components/group.advantages";
import "./advantages.style.css"

const Advantages = function() {
    return (
        <div className="container">
            <div className="group-advantages">
                <GroupAdvantages info={{title: '10 лет', body: 'гарантии'}}/>
                <GroupAdvantages info={{title: '548 этажей', body: 'лестниц установлено'}}/>
                <GroupAdvantages info={{title: 'точно в срок', body: 'описание в два слова'}}/>
                <GroupAdvantages info={{title: 'из европы', body: 'описание в два слова'}}/>
            </div>
            <hr className="advantages-line"/>
        </div>
    )
}

export default Advantages;