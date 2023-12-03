import React from "react";
import "./styles/Footer.css";
import { FaDiscord } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Join our Discord</h4>
          <a href="https://discord.gg/UjQnfvvjd5" className="discord-link">
            <FaDiscord className="discord-icon" /> Discord Server
          </a>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <a href="/chemistry-resources"><li>Chemistry Resources</li></a>
            <a href="/physics-resources"><li>Physics Resources</li></a>
            <a href="/math-resources"><li>Math Resources</li></a>
            <a href="/biology-resources"><li>Biology Resources</li></a>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Appointments</h4>
          <ul>
            <li><a href="/appointments">Book a Tutoring Session</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2023 STEM Tutoring Club. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
