import React from "react";
import "./styles/Home.css"
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer"

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Footer />
        </React.Fragment>
    )
}

export default Home;
