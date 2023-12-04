import React from "react";
import "./styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>STEM Tutoring Club</h1>
      <button>About Us</button>
      <a href="/appointments"><button>Appointments</button></a>
    </div>
  );
}

export default HeroSection;
