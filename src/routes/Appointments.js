import React from "react";
import { InlineWidget } from "react-calendly";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Appointments.css"

function Appointments() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <InlineWidget url="https://calendly.com/sidjain88tx" />
      </div>
      <Footer />
    </div>
  );
};

export default Appointments;
