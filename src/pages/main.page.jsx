import React from "react";
import Header from "../components/header/header.component";
import Home from "../components/home/home"
import Advantages from "../components/advantages/advantages";
import Calculator from "../components/calculate.price/calculate.components";
import '../styles.css';

const Main_page = function () {
    return (
        <>
            <Header />
            <Home />
            <Advantages />
            <Calculator />
       </>
    )
}

export default Main_page;