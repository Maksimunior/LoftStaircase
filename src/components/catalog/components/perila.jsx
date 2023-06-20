import React from "react";

export const Perila = () => {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <div className="perila__droup_card">
            <img src="./assets/catalog-perila.jpg" alt="Перила" />
            <h6 className="perila__title">художественная<br />ковка</h6><hr className="perila__line"/>
            <button className="perila__button" onClick={Click}><h6>выбрать</h6><a href="#" className="perila__button_icon"></a></button>
        </div>
    )
}