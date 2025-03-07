import React from "react";
import { Link } from "react-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header">
        <div className="logo-container">
          <h4 className="logo">Eganh</h4>
        </div>

        <ul className="navbar">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="contact-icon">
          <img className="contact-svg" src="icons/contact.svg" alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Header;
