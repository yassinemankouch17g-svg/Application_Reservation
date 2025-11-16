import React from "react";
import bgImage from "../assets/img/hero-bg.jpg";
import gallery3 from "../assets/img/gallery/gallery-3.jpg";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Transparent overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <div className="home-text">
          <h1>
            Welcome to <b style={{ color: "#d4af37" }}>GOLD</b>-Restaurant
          </h1>
          <p>Delivering great food for more than 18 years!</p>

          {/* --- BUTTONS ADDED HERE --- */}
          <div className="home-buttons">
            <Link to="/about" className="btn-about">
              About
            </Link>
            <Link to="/contact" className="btn-contact">
              BOOK A TABLE
            </Link>
          </div>
        </div>

        <div>
          <img src={gallery3} alt="Gallery 3" />
        </div>
      </div>
    </div>
  );
}
