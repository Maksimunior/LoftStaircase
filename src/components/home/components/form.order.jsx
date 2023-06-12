import React from "react";

const Order = function() {
    return (
        <form className="form">
            <div>
                <input type="text" name="numbers" className="text-field" placeholder="номер телефона" required /><hr />
            </div>
            <button className="will-order" ><h6 className="text-will-order">ЗАКАЗАТЬ</h6><a href="#" className="icon-will-order"/></button>
        </form>
    )
}
export default Order;