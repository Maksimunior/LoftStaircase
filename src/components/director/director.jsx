import React from "react";
import { BlockText } from "./components/block.text";
import "./director.style.css"

export const Director = () => {
    return (
        <div className="container">
            <div className="director">
                <img src="./assets/director.png" alt="Директор" style={{zIndex: 1}} />
                <BlockText />
            </div>
        </div>
    )
}