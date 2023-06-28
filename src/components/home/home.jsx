import React, { useState } from "react";
import { InfoText, Order, Introduction, ModalVodeo } from "./components";
import "./home.styles.css";

export const Home = function() {
    const [modalActive, setModalActive] = useState(false)
    const Video = (e) => {
        e.preventDefault();
        setModalActive(true);
    }
    return (
        <div className="home">
            <div className="container">
                <InfoText />
                <div className="group-form">
                    <Order />
                    <Introduction onClick={Video}/>
                </div>
                <ModalVodeo 
                  active={modalActive}
                  setModalActive={setModalActive}
                />
            </div>
        </div>
    )
}