import React from "react";
import Header from "../components/header/header.component";
import Home from "../components/home/home"
import Advantages from "../components/advantages/advantages";
import '../styles.css';

const Main_page = function () {
    return (
        <>
            <Header />
            <Home />
            <Advantages />
       </>
    )
}

export default Main_page;