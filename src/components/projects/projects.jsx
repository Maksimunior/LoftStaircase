import React, { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Carusel } from "./components/carusel";
import "./projects.style.css"

const infoArray = [
    {title: 'лестница на металлическом каркасе', price:  ['276 000 р', '456 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'монтаж,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Подступь НДВ20', 'Торец лестницы - гипрок, шпаклевание под обои', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 80х40х4, 40х40х3, уголок 40х40х4', 'Макисмальная нагрузка до 200кг'], values: 'monokosour'}, 
    {title: 'лестница на деревянном каркасе', price:  ['167 000 р', '322 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'монтаж,',  'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Подступь НДВ20', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 80х60х4, 60х40х3, уголок 50х50х4', 'Макисмальная нагрузка до 220кг'], values: 'closed'},
    {title: 'лестница на металлическом каркасе', price:  ['412 000 р', '630 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Торец лестницы - гипрок, шпаклевание под обои', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 90х70х4, 60х60х4, уголок 40х40х4', 'Макисмальная нагрузка до 270кг'], values: 'open'},
    {title: 'лестница на деревянном каркасе', price:  ['170 000 р', '250 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Подступь НДВ20'], characteristics: ['Каркас: профиль 80х60х4, 40х40х4, уголок 40х40х4', 'Макисмальная нагрузка до 210кг'], values: 'screw'},
    {title: 'лестница на металлическом каркасе', price:  ['210 000 р', '390 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'монтаж,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Подступь НДВ20', 'Торец лестницы - гипрок, шпаклевание под обои', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 80х80х4, 60х60х3, уголок 50х50х4', 'Макисмальная нагрузка до 260кг'], values: 'monokosour'},
    {title: 'лестница на деревянном каркасе', price:  ['250 000 р', '416 789 Р'], services: ['Замер,', 'проектирование,', 'монтаж,', 'материал'], materials: ['Подступь НДВ20', 'Торец лестницы - гипрок, шпаклевание под обои', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 60х40х4, 40х20х3, уголок 40х40х4', 'Макисмальная нагрузка до 170кг'], values: 'closed'},
    {title: 'лестница на металлическом каркасе', price:  ['352 000 р', '750 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'монтаж,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Подступь НДВ20'], characteristics: ['Каркас: профиль 80х70х4, 50х40х3, уголок 40х40х4', 'Макисмальная нагрузка до 220кг'], values: 'screw'},
    {title: 'лестница на деревянном каркасе', price:  ['120 000 р', '210 789 Р'], services: ['Замер,', 'монтаж,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Подступь НДВ20', 'Торец лестницы - гипрок, шпаклевание под обои'], characteristics: ['Каркас: профиль 80х60х4, 50х50х3, уголок 40х40х4', 'Макисмальная нагрузка до 250кг'], values: 'open'},
    {title: 'лестница на металлическом каркасе', price:  ['341 000 р', '576 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Торец лестницы - гипрок, шпаклевание под обои', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 70х60х4, 50х50х3, уголок 40х40х4', 'Макисмальная нагрузка до 240кг'], values: 'monokosour'}, 
    {title: 'лестница на деревянном каркасе', price:  ['179 000 р', '321 789 Р'], services: ['Замер,', 'монтаж,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 100х80х4, 50х50х3, уголок 40х40х4', 'Макисмальная нагрузка до 310кг'], values: 'closed'},
    {title: 'лестница на металлическом каркасе', price:  ['276 000 р', '456 789 Р'], services: ['Замер,', 'проектирование,', 'монтаж,', 'грунтование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Подступь НДВ20', 'Торец лестницы - гипрок, шпаклевание под обои', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 80х80х4, 50х40х3, уголок 40х40х4', 'Макисмальная нагрузка до 260кг'], values: 'screw'},
    {title: 'лестница на деревянном каркасе', price:  ['421 000 р', '730 789 Р'], services: ['Замер,', 'проектирование,', 'изготовление,', 'монтаж,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Ступени - бук цельноламельный (тонированный цвет - орех)', 'Ограждения из нержавеющей стали asi304'], characteristics: ['Каркас: профиль 80х80х4, 50х50х3, уголок 40х40х4', 'Макисмальная нагрузка до 290кг'], values: 'open'},
    {title: 'лестница на металлическом каркасе', price:  ['653 000 р', '192 789 Р'], services: ['Замер,', 'проектирование,', 'материал'], materials: ['Окраска трехкомпонентной краской', 'Подступь НДВ20', 'Торец лестницы - гипрок, шпаклевание под обои'], characteristics: ['Каркас: профиль 80х80х4, 50х50х3, уголок 40х40х4', 'Макисмальная нагрузка до 290кг'], values: 'monokosour'},
]

export const Projects = () => {
    const [ofsait, setOfsait] = useState(0)
    const [categories, setCatigories] = useState('all')
    const [activeButton, setActiveButton ] = useState('all')
    const PAGE_WIDTH = 1261

    const handleCategoryClick = (value) => {
        setOfsait((currentOffset) => {
            return currentOffset = 0
        })
        setCatigories(value)
        setActiveButton((setActiveButton) => {return setActiveButton = value})
    }

    const sortedSlider = useMemo(() => {
        if (handleCategoryClick && categories != 'all') {
            return infoArray.filter(item => item.values === categories)
        }
        return infoArray
    }, [categories]) 

    const handleLeftArrowClick = () => {
        setOfsait((currentOffset) => {
            const nuwOfset = currentOffset + PAGE_WIDTH
            return Math.min(nuwOfset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOfsait((currentOffset) => {
            const nuwOfset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (sortedSlider.length - 1))
            return Math.max(nuwOfset, maxOffset)
        })
    }
    return (
        <div className="projects">
            <div className="container">
                <div className="projects__block_title">
                    <h2>Наши</h2>
                    <h2 className="project__title">работы</h2>
                </div>
                <div className="categories">
                    <button 
                      className={activeButton === "all" ? "button-categories button-categories-background" : "button-categories"}
                      onClick={() => {handleCategoryClick('all')}}
                    ><h4>все</h4></button>
                    <button 
                      className={activeButton === "monokosour" ? "button-categories button-categories-background" : "button-categories"}
                      onClick={() => {handleCategoryClick('monokosour')}}
                    ><h4>монокосоур</h4></button>
                    <button 
                      className={activeButton === "closed" ? "button-categories button-categories-background" : "button-categories"}
                      onClick={() => {handleCategoryClick('closed')}}
                    ><h4>закрытые</h4></button>
                    <button 
                      className={activeButton === "open" ? "button-categories button-categories-background" : "button-categories"}
                      onClick={() => {handleCategoryClick('open')}}
                    ><h4>открытые</h4></button>
                    <button 
                      className={activeButton === "screw" ? "button-categories button-categories-background" : "button-categories"}
                      onClick={() => {handleCategoryClick('screw')}}
                    ><h4>винтовые</h4></button>
                </div><hr className="categories-line"/>
                <div>
                    <div className="main-container">
                        <div className="block-arrow block-left" onClick={handleLeftArrowClick}>
                            <FaChevronLeft />
                        </div>
                        <div className="projects__group_cards">
                            {sortedSlider.map((sortedSlider, index) => 
                                <Carusel key={index} info={sortedSlider} values={ofsait}/>
                            )}
                        </div>
                        <div className="block-arrow block-right" onClick={handleRightArrowClick}>
                            <FaChevronRight />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}