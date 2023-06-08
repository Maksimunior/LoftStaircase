import React from "react";
import "./home.styles.css";

const Home = function() {
    return (
        <div className="home">
            <div className="container">
                <ul className="menu">
                    <li><a className="menu-link" href="#">Узнать стоимость</a></li>
                    <li><a className="menu-link" href="#">Каталог</a></li>
                    <li><a className="menu-link" href="#">Обшивка</a></li>
                    <li><a className="menu-link" href="#">Наши работы</a></li>
                    <li><a className="menu-link" href="#">Производство</a></li>
                </ul>
                <div className="home__text">
                    <h1 className="title-text">Каркасная лестница на монокосоуре</h1>
                    <h3 className="text">со скидкой 10%</h3>
                </div>
                <div className="group-form">
                    <form className="form">
                        <div className="group-text-field">
                            <input type="text" className="text-field" placeholder="номер телефона" /><hr/>
                        </div>
                        <button className="will-order" ><h6 className="text-will-order">ЗАКАЗАТЬ</h6><a href="#" className="icon-will-order"/></button>
                    </form>
                    <div className="video-plyer">
                        {/* <div>
                            <video width="126px" height="95px" controls>
                                <source src="https://youtu.be/F0FNGDuIxlE" type="video/mp4" />
                            </video>
                        </div> */}
                        <a href="https://youtu.be/F0FNGDuIxlE" target="_blank"><img src="/assets/production_video.png" alt="Відеоплеєр" className="video-link" /></a>
                        <h6 className="text-video">смотреть видео о нашем производстве</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;