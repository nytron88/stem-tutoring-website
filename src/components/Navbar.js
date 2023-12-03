import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";
import logo from "./images/logo.png"

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <header>
      <a href="/"> <img className="logo" src={logo} alt="Logo"/></a>
      <nav ref={navRef} className={`navbar ${isOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/appointments">Appointments</a>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleResourcesDropdown}>Resources</button>
          <div className={`dropdown-content ${isResourcesOpen ? "show" : ""}`}>
            <a href="/chemistry-resources">Chemistry Resources</a>
            <a href="/physics-resources">Physics Resources</a>
            <a href="/math-resources">Math Resources</a>
            <a href="/biology-resources">Biology Resources</a>
          </div>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
