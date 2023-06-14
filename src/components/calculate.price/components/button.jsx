import React from "react";

export const Button = (props) => {
    return (
        <div className="buttton-calculate">
            <button className="will-orders" {...props} ><h6 className="text-will-order">Рассчитать стоимость</h6><a href="#" className="icon-will-order" /></button>
        </div>
    )
}
