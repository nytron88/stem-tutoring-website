import React from "react";
import "./styles/AboutUs.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaDiscord } from "react-icons/fa";

function AboutUs() {
  return (
    <div id="about" className="about-container">
      <h1>About Us</h1>
      <p>Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap Yap</p>
      <div className="info-cards">
        <div className="info-card">
          <FaCalendarAlt className="icon" />
          <a href="/appointments"><h3>Make Appointments</h3></a>
        </div>
        {/* <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Location</h3>
          <p>Uplift North Hills Preparatory (606 E Royal Ln Irving, TX 75039)</p>
        </div> */}
        <div className="info-card">
          <FaDiscord className="icon" />
          <a href="https://discord.gg/UjQnfvvjd5"><h3>Join</h3></a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
