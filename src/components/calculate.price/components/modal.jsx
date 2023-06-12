import React from "react";
import ModalExit from '../icons/modal_exit.svg';


const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="madal__content" onClick={e => e.stopPropagation}>
                <div className="modal__block_line">
                    <hr className="modal__line" />
                </div>        
                <biv className="modal__block_button">
                    <button className="modal__botton" onClick={() => setActive(false)}><img src={ModalExit} alt="icon" /></button>
                </biv>
                <h2 className="madal__title">Ваш расчет готов!</h2>
            </div>
        </div>
    )
}

export default Modal;