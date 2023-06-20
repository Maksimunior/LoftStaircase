import React from "react";

export const Categories = ({name, onClick, cards,  props}) => {
    // console.log(name)
    const Name = (e) => {
        onClick(cards, name = 'value')
        // console.lo q
    }
    return (
        <div 
          className="categories" 
          {...props}
        >
            <button className="button-categories" value="винтовые" onClick={Name}><h4>все</h4></button>
            <button className="button-categories" value="монокосоур" onClick={Name}><h4>монокосоур</h4></button>
            <button className="button-categories" value="закрытые" onClick={Name}><h4>закрытые</h4></button>
            <button className="button-categories" value="открытые" onClick={cards}><h4>открытые</h4></button>
            <button className="button-categories" value="все" onClick={cards}><h4>винтовые</h4></button>
        </div>
    )
} 
