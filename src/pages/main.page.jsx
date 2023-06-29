import React from "react";
import { Header, Home, Advantages, Calculator, Catalog, Sheathing, Banner, Projects, Director, Contacts, BannerStairs, Footer } from "../components";
import '../styles.css';

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