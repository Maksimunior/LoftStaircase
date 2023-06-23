import React from "react";
import "./director.style.css"

export const Director = () => {
    return (
        <div className="container">
            <div className="director">
                <img src="./assets/director.png" alt="Директор" style={{zIndex: 1}} />
                <div className="director__block_text">
                    <div className="director__group_title">
                        <h2>Слово </h2>
                        <h2 className="director__title">директора</h2>
                    </div>
                    <h5 className="director__paragraph">С учётом сложившейся международной обстановки, синтетическое тестирование, 
                    а также свежий взгляд на привычные вещи  - безусловно открывает новые горизонты для переосмысления внешнеэкономических политик.<br /><br />
                    Тщательные исследования конкурентов призывают нас к новым свершениям, которые, в свою очередь, должны быть 
                    заблокированы в рамках своих собственных рациональных ограничений.</h5>
                    <h5 className="director_name">С.А. Твердохлебов</h5>
                </div>
            </div>
        </div>
    )
}