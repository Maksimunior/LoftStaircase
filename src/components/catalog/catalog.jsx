import React, { useMemo, useRef, useState } from "react";
import { Carousel } from "./components/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Perila } from "./components/perila";
import "./catalog.styles.css"


const card = [
    {title: 'Два марша без площадки на монокосоуре', body: 'от 100 000 Р', values: 'монокосоур'}, 
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'закрытые'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'открытые'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'винтовые'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 200 000 Р', values: 'монокосоур'},
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'закрытые'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'винтовые'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'открытые'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 100 000 Р', values: 'монокосоур'}, 
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'закрытые'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'винтовые'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'открытые'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 200 000 Р', values: 'монокосоур'},
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'закрытые'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'винтовые'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'открытые'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'открытые'},
    {title: 'Два марша без площадки на монокосоуре', body: 'от 200 000 Р', values: 'монокосоур'},
    {title: 'Два марша без площадки на закрытoй лестнице', body: 'от 150 000 Р', values: 'закрытые'},
    {title: 'Два марша без площадки на винтовой', body: 'от 100 000 Р', values: 'винтовые'},
    {title: 'Два марша без площадки на открытой лестнице', body: 'от 350 000 Р', values: 'открытые'},
]

const Catalog = () => {
    const [ofsait, setOfsait] = useState(0)
    const [categories, setCatigories] = useState('все')
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const PAGE_WIDTH = 320 


    const handleCategoryClick = (value) => {
        setOfsait((currentOffset) => {
            return currentOffset = 0
        })
        setCatigories(value)
        if (value === 'все'){
            setActive1((active1) => {return active1 = true})
            setActive2((active2) => {return active2 = false})
            setActive3((active3) => {return active3 = false})
            setActive4((active4) => {return active4 = false})
            setActive5((active5) => {return active5 = false})
        }
        else if (value === 'монокосоур'){
            setActive1((active1) => {return active1 = false})
            setActive2((active2) => {return active2 = true})
            setActive3((active3) => {return active3 = false})
            setActive4((active4) => {return active4 = false})
            setActive5((active5) => {return active5 = false})
        }
        else if (value === 'закрытые'){
            setActive1((active1) => {return active1 = false})
            setActive2((active2) => {return active2 = false})
            setActive3((active3) => {return active3 = true})
            setActive4((active4) => {return active4 = false})
            setActive5((active5) => {return active5 = false})
        }
        else if (value === 'открытые'){
            setActive1((active1) => {return active1 = false})
            setActive2((active2) => {return active2 = false})
            setActive3((active3) => {return active3 = false})
            setActive4((active4) => {return active4 = true})
            setActive5((active5) => {return active5 = false})
        }
        else if (value === 'винтовые'){
            setActive1((active1) => {return active1 = false})
            setActive2((active2) => {return active2 = false})
            setActive3((active3) => {return active3 = false})
            setActive4((active4) => {return active4 = false})
            setActive5((active5) => {return active5 = true})
        }
    }

    const sortedSlider = useMemo(() => {
        if (handleCategoryClick && categories != 'все') {
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
                              className={active1 ? "button-categories button-categories-background" : "button-categories"} 
                              value="все" 
                              onClick={() => {handleCategoryClick('все')
                              
                            }}
                              onClickCategory={handleLeftArrowClick}
                            ><h4>все</h4></button>
                            <button 
                              className={active2 ? "button-categories button-categories-background" : "button-categories"} 
                              value="монокосоур" 
                              onClick={() => handleCategoryClick('монокосоур')}
                              onClickCategory={handleRightArrowClick}
                            ><h4>монокосоур</h4></button>
                            <button 
                              className={active3 ? "button-categories button-categories-background" : "button-categories"} 
                              value="закрытые" 
                              onClick={() => handleCategoryClick('закрытые')}
                            ><h4>закрытые</h4></button>
                            <button 
                              className={active4 ? "button-categories button-categories-background" : "button-categories"}  
                              value="открытые" 
                              onClick={() => handleCategoryClick('открытые')}
                            ><h4>открытые</h4></button>
                            <button 
                              className={active5 ? "button-categories button-categories-background" : "button-categories"} 
                              value="винтовые" 
                              onClick={() => handleCategoryClick('винтовые')}
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