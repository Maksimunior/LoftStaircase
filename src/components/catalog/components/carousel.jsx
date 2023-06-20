import React from "react"

export const Carousel = (props) => {
    console.log(props)
    return (
        <div 
          className="card"
          values={props.card.values}
          style={{transform: `translateX(${props.values}px)`}}
        >
            <img className="card-icon" src="/assets/card_categories.png" alt="Картка сходів" />
            <div className="card-contents">
                <h6 className="text-weigth">{props.card.title}</h6><hr />
                <div>
                    <div className="card-text">
                        <h5>{props.card.body}</h5>
                        <h5>от 14 дней</h5>
                    </div>
                    <h6 className="text-opasity">под ключ с покраской в любой цвет</h6>
                </div>
                <div className="group-button">
                    <button className="will-order" ><h6 className="text-will-order">ЗАКАЗАТЬ</h6><a href="#" className="icon-will-order"/></button>
                </div>
            </div>
        </div>
    )
}