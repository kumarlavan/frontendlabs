import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/blackbglogo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Left Side: Logo & Clickable Website Name */}
        <Link to="/" className="navbar-brand d-flex align-items-center" onClick={toggleNavbar}>
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top me-2 rounded-circle"
          />
          <span className="fs-4 fw-bold gradient-text animate__hinge labs">
            FrontendLabs
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side: Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""} ms-auto`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/about" onClick={toggleNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/questions" onClick={toggleNavbar}>
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animated-link" to="/contact" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
