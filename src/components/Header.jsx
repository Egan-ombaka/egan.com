import React, { useState } from "react";
import "../css/Header.css";

const Header = ({ setCurrentPage }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="header-section">
      <div className="header">
        <div onClick={() => setCurrentPage("home")} className="logo-container">
          <h4 className="logo">Eganh</h4>
        </div>

        <ul className="navbar">
          <li>
            <a onClick={() => setCurrentPage("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => setCurrentPage("blog")}>Blog</a>
          </li>
        </ul>

        <div className="contact-icon" onClick={toggleDropdown}>
          <img className="contact-svg" src="icons/contact.svg" alt="Connect" />
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <a href="#contact1">Contact 1</a>
              <a href="#contact2">Contact 2</a>
              <a href="#contact3">Contact 3</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
