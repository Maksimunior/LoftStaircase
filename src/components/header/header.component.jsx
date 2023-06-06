import React from "react";
// import logo from ".src/icons";
const Header = function() {
    return (
        <div className="header">
            <div className="log">
                <img src='./icons/logo.png' alt="Логотоип" className="logo" />
                {/* <h1>ЛОТФ<br/>ЛЕСТНИЦЫ</h1>
                <h3 className="text__log">ТВЕРДОХЛЕБОВА</h3> */}
            </div>
            <h3 className="header__text">изготовление лестниц на металлокаркасев Санкт-Петербурге</h3>
        </div>       
    )
}

export default Header;