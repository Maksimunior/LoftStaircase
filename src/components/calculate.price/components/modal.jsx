import React from "react";
import ModalExit from '../icons/modal_exit.svg';


export const Modal = ({active, setActive, ...props}) => {
    const noReset = (e) => {
        e.preventDefault()
        setActive(false)
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="madal__content" onClick={e => e.stopPropagation()}>
              <div>
                <div className="modal__block_line">
                    <hr className="modal__line" />
                </div>        
                <div className="modal__block_button">
                    <button className="modal__botton" onClick={noReset}><img src={ModalExit} alt="icon" /></button>
                </div>
              </div>
                <h2>Ваш расчет готов!</h2>
                <h2 className="modal__text">Ваш счет: {props.value} рублей</h2>
            </div>
        </div>
    )
}
