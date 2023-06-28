import React from "react";
import { ContactsIcons, ContactsPhone, SocialNetworks, Messengers } from "./components";
import "./contacts.style.css"

export const Contacts = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__group">
                    <div className="contact__block_text">
                        <h2 className="contact__title">Контакты</h2>
                        <h5 className="contact__paragraph">Небольшой текст для этого блока<br />длиной в две строки</h5>
                        <ContactsPhone />
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
                    <ContactsIcons />
                </div>
            </div>
        </div>
    )
}