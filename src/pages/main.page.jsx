import React from "react";
import Header from "../components/header/header.component";
import Home from "../components/home/home"
import Advantages from "../components/advantages/advantages";
import Calculator from "../components/calculate.price/calculate.components";
import Catalog from "../components/catalog/catalog";
import { Sheathing } from "../components/sheathing/sheathing";
import { Banner } from "../components/banner/banner";
import '../styles.css';

const Main_page = function () {
    return (
        <>
            <Header />
            <Home />
            <Advantages />
            <Calculator />
            <Catalog />
            <Sheathing />
            <Banner />
       </>
    )
}

export default Main_page;