import React from "react";
import "./styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>STEM Tutoring Club</h1>
      <a href="#about"><button href="#about">About Us</button></a>
      <div className="subject-buttons">
        <a href="math-resources"><button className="subject-button ib-maths">Math</button></a>
        <a href="biology-resources"><button className="subject-button ib-biology">Biology</button></a>
        <a href="chemistry-resources"><button className="subject-button ib-chemistry">Chemistry</button></a>
        <a href="/physics-resources"><button className="subject-button ib-physics">Physics</button></a>
      </div>
    </div>
  );
}

export default HeroSection;
