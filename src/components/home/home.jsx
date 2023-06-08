import React from "react";
import "./home.styles.css";
import Menu from "./components/menu";
import Info_text from "./components/info.text";
import Order from "./components/form.order";
import Introduction from "./components/video.introduction";

const Home = function() {
    return (
        <div className="home">
            <div className="container">
                <Menu />
                <Info_text />
                <div className="group-form">
                    <Order />
                    <Introduction />
                </div>
            </div>
        </div>
    )
}

export default Home;