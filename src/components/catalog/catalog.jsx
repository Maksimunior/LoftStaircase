import React, { useMemo, useState } from "react";
import { Carousel } from "./components/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Perila } from "./components/perila";
import "./catalog.styles.css"

const card = [
    {title: 'Два марша без площадки на монокосоуре', body: 'от 100 000 Р', values: 'monokosour'}, 
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'closed'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'open'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'screw'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 200 000 Р', values: 'monokosour'},
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'closed'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'screw'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'open'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 100 000 Р', values: 'monokosour'}, 
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'closed'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'screw'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'open'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 200 000 Р', values: 'monokosour'},
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'closed'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'screw'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'open'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'open'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 200 000 Р', values: 'monokosour'},
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'closed'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'screw'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'open'},
]

const Catalog = () => {
    const [ofsait, setOfsait] = useState(0)
    const [categories, setCatigories] = useState('all')
    const [activeButton, setActiveButton ] = useState('all')
    const PAGE_WIDTH = 320 


    const handleCategoryClick = (value) => {
        setOfsait((currentOffset) => {
            return currentOffset = 0
        })
        setCatigories(value)
        setActiveButton((setActiveButton) => {return setActiveButton = value})
    }

    const sortedSlider = useMemo(() => {
        if (handleCategoryClick && categories != 'all') {
            return card.filter(item => item.values === categories)
        }
        return card
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
            const maxOffset = -(PAGE_WIDTH * (sortedSlider.length - 4))
            return Math.max(nuwOfset, maxOffset)
        })
    }
    return (
        <div className="container">
            <div className="catalog">
                <div className="stairs">
                    <h1>Каталог лестниц</h1>
                    <div>
                        <div className="categories">
                            <button
                              className={activeButton === 'all' ? "button-categories button-categories-background" : "button-categories"} 
                              onClick={() => {handleCategoryClick('all')}}
                            ><h4>все</h4></button>
                            <button 
                              className={activeButton === 'monokosour' ? "button-categories button-categories-background" : "button-categories"} 
                              onClick={() => handleCategoryClick('monokosour')}
                            ><h4>монокосоур</h4></button>
                            <button 
                              className={activeButton === 'closed' ? "button-categories button-categories-background" : "button-categories"} 
                              onClick={() => handleCategoryClick('closed')}
                            ><h4>закрытые</h4></button>
                            <button 
                              className={activeButton === 'open' ? "button-categories button-categories-background" : "button-categories"}  
                              onClick={() => handleCategoryClick('open')}
                            ><h4>открытые</h4></button>
                            <button 
                              className={activeButton === 'screw' ? "button-categories button-categories-background" : "button-categories"} 
                              onClick={() => handleCategoryClick('screw')}
                            ><h4>винтовые</h4></button>
                        </div><hr className="categories-line"/>
                        <div>
                            <div className="main-container">
                                <div className="block-arrow block-left" onClick={handleLeftArrowClick}>
                                    <FaChevronLeft />
                                </div>
                                <div className="group-cards">
                                    {sortedSlider.map((sortedSlider, index) => 
                                        <Carousel key={index} card={sortedSlider} values={ofsait}/>
                                    )} 
                                </div>  
                                <div className="block-arrow block-right" onClick={handleRightArrowClick}>
                                    <FaChevronRight />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>            
                <h1>Перила-ограждения на выбор</h1>
                <div className="perila">
                    <Perila />
                    <Perila />
                    <Perila />
                    <Perila />
                    <Perila />
                </div>
            </div>
        </div>
    )
}

export default Catalog;