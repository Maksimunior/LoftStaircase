import React from "react";
import { Header, Home, Advantages, Calculator, Catalog, Sheathing, Banner, Projects, Director, Contacts, BannerStairs, Footer } from "../components";
// import {  } from "../components/home/home"
// import {  } from "../components/advantages/advantages";
// import {  } from "../components/calculate.price/calculate.components";
// import {  } from "../components/catalog/catalog";
// import {  } from "../components/sheathing/sheathing";
// import {  } from "../components/banner/banner";
// import {  } from "../components/projects/projects";
// import {  } from "../components/director/director";
// import {  } from "../components/contacts/contacts";
// import {  } from "../components/banner.stairs/banner.stairs";
import '../styles.css';
// import {  } from "../components/footer/footer";

const MainPage = function () {
    return (
        <>
            <Header />
            <Home />
            <Advantages />
            <Calculator />
            <Catalog />
            <Sheathing />
            <Banner />
            <Projects />
            <Director />
            <Contacts />
            <BannerStairs />
            <Footer />
       </>
    )
}

export default MainPage;