import React from "react";
import "../css/Header.css";

const Header = ({ setCurrentPage }) => {
  return (
    <div className="header-section">
      <div className="header">
        <div onClick={() => setCurrentPage('home')} className="logo-container">
          <h4 className="logo">Eganh</h4>
        </div>

        <ul className="navbar">
          <li>
            <a onClick={() => setCurrentPage("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("about")}>About</a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("blog")}>Blog</a>
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
