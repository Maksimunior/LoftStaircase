import React from "react";
// import { CaruselSlaider } from "./carusel.slaider";

export const Carusel = (props) => {
    // console.log(props.info.title)
    return (
        <div 
          className="carusel"
          style={{transform: `translateX(${props.values}px)`}}
        >
            <img src="./assets/project.jpg" alt="Ступеньки" />
                {/* <div className="carusel__slaider">
                    <CaruselSlaider />
                </div> */}
            <div className="carusel__block_text">
                <h4>{props.info.title}</h4>
                <div>
                    <p className="carusel_paragraph">цена под ключ</p>
                    <div className="carusel__group_price">
                        <h4 className="carusel_prise">{props.info.price[0]}</h4>
                        <p className="carusel_paragraph"><s>{props.info.price[1]}</s></p>
                    </div>
                </div>
                <div className="carusel__text1">
                        <h5>В СТОИМОСТЬ ВХОДИТ:</h5>
                        {/* <h5 className="carusel_h5-weight"> */}
                        <div className="carusel__text_flex">
                            {props.info.services.map(services => (
                                <h5 key={services} className="carusel_h5-weight">{services} </h5>
                            ))}
                        </div>
                        {/* {props.info.services[0]}, {props.info.services[1]}, {props.info.services[2]}, {props.info.services[3]}, {props.info.services[4]}, {props.info.services[5]} */}
                        {/* </h5> */}
                    </div>
                    <div className="carusel__text2">
                        <h5>МАТЕРИАЛЫ:</h5>
                        <ul>
                            {props.info.materials.map(materials => (
                                <li key={materials}><h5 className="carusel_h5-weight">{materials}</h5></li>
                            ))}
                        </ul>
                    </div>
                    <div className="carusel__text3">
                        <h5>ХАРАКТЕРИСТИКА:</h5>
                        <ul>
                            {props.info.characteristics.map(characteristics => (
                                <li key={characteristics}><h5 className="carusel_h5-weight">{characteristics}</h5></li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
    )
}