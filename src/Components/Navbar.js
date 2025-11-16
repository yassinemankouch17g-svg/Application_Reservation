import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <b style={{ color: "#d4af37" }}>GOLD</b>-Restaurant
        </div>

        {/* Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {["Home", "About", "Menu", "Gallery"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* BOOK A TABLE */}
          <li>
            <Link
              to="/Contact"
              className="book-btn"
              onClick={() => setIsOpen(false)}
            >
              BOOK A TABLE
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </div>
      </div>
    </nav>
  );
}
