import React from "react";
import "./styles/Home.css"
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <HeroSection />
            <Footer />
        </React.Fragment>
    )
}

export default Home;
