import React, { useEffect, useState } from "react";

export const Menu = () => {
      const [isFixed, setIsFixed] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
            const element = document.documentElement;
            const { scrollTop, clientHeight } = element;
    
          if (scrollTop > 84) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <div className={isFixed ? "nav fixed" : "nav"}>
            <ul className="menu"> 
                    <li><a className="menu-link" href="#price">Узнать стоимость</a></li>
                    <li><a className="menu-link" href="#catalog">Каталог</a></li>
                    <li><a className="menu-link" href="#sheathing">Обшивка</a></li>
                    <li><a className="menu-link" href="#projects">Наши работы</a></li>
                    <li><a className="menu-link" href="#production">Производство</a></li>
            </ul>
        </div>
    ) 
}