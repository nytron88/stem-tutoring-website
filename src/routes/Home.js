import React from "react";
import "./styles/Home.css"
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer"

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <CardSlider />
            <Footer />
        </React.Fragment>
    )
}

export default Home;