import React from "react";

export const Order = function() {
    const Click = (e) => {
        e.preventDefault()
    }
    return (
        <form className="form">
            <div>
                <input type="text" name="numbers" className="text-field" placeholder="номер телефона" required /><hr />
            </div>
            <button className="will-order" onClick={Click} ><h6 className="text-will-order">ЗАКАЗАТЬ</h6><a href="#" className="icon-will-order"></a></button>
        </form>
    )
}