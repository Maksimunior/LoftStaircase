import React from "react";
import "./contacts.style.css"
import Messengers from "../messengers";
import { SocialNetworks } from "../social.networks";

export const Contacts = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__group">
                    <div className="contact__block_text">
                        <h2 className="contact__title">Контакты</h2>
                        <h5 className="contact__paragraph">Небольшой текст для этого блока<br />длиной в две строки</h5>
                        <div className="animations-contacts">
                            <a href="tel:+7 (812) 981-06-27"><h5 className="phone">+7 (812) 981-06-27</h5></a>
                            <a href="tel:+7 (952) 266-99-54"><h5 className="phone">+7 (952) 266-99-54</h5></a>
                        </div>
                        <a href="mailto:lest.svarka.spb@gmail.com" className="contact__link"><h6 className="contact__link">lest.svarka.spb@gmail.com</h6></a>
                        <h6>Работаем без выходных<br />с 8:00 до 22:00</h6>
                        <div>
                            <h6>Последние новости в наших соцсетях:</h6>
                            <SocialNetworks />
                        </div>
                        <div>
                            <h6>Свяжитесь с нами через мессенджеры:</h6>
                            <Messengers />
                        </div>
                    </div>
                    <div className="contact__networks">
                        <a href="https://instagram.com/evroshodu_cv?igshid=MzRlODBiNWFlZA==" target="_blank"><img src="./assets/komputerovichkof_instagram.jpg" alt="Підписка на соціальну мережу" /></a>
                        <a href="https://youtube.com/@eurolestnica359" target="_blank"><img src="./assets/komputerovichkof__youtube.jpg" alt="Підписка на YouTube" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}