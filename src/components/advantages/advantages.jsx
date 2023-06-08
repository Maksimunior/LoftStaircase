import React from "react";
import Group_advantages from "./components/group.advantages";
import "./advantages.style.css"

const Advantages = function() {
    return (
        <div className="container">
            <div className="group-advantages">
                <Group_advantages info={{title: '10 лет', body: 'гарантии'}}/>
                <Group_advantages info={{title: '548 этажей', body: 'лестниц установлено'}}/>
                <Group_advantages info={{title: 'точно в срок', body: 'описание в два слова'}}/>
                <Group_advantages info={{title: 'из европы', body: 'описание в два слова'}}/>
            </div>
            <hr className="advantages-line"/>
        </div>
    )
}

export default Advantages;