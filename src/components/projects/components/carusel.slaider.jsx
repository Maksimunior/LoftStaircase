import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export const CaruselSlaider = () => {
    return (
        <div className="carusel-slaider">
            <img src="./assets/project.jpg" alt="Ступеньки" className="slaider_icon" />
            <img src="./assets/project.jpg" alt="Ступеньки" className="slaider_icon" />
            <img src="./assets/project.jpg" alt="Ступеньки" className="slaider_icon" />
            <FaChevronLeft />
            <FaChevronRight />
        </div>
    )
}