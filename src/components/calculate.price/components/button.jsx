import React from "react";

const Button = ({setModalActive}) => {
    return (
        <div className="buttton-calculate">
            <input type="text" name="number" placeholder="номер телефона" className="fone-calculate" required />
            <button className="will-orders" onClick={() => setModalActive(true)}><h6 className="text-will-order">Рассчитать стоимость</h6><a href="#" className="icon-will-order" /></button>
        </div>
    )
}

export default Button;