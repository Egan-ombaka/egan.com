import React, { useState } from "react";
import "../css/Dropdown.css";
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

        <div className="contact-icon">
          <img
            className="contact-svg"
            onClick={toggleDropdown}
            src="icons/contact.svg"
            alt="Connect"
          />
          {isDropdownVisible && (
            <div className="dropdown-toggle">
              <div className="dropdown-menu">
                <h1 className="lets-connect">Let's Connect</h1>
                <div className="input">
                  <input className="input-name" type="text" />
                  <input className="input-email" type="text" />
                  <input className="input-mesage" type="text" />
                </div>
                <button className="submit">SUBMIT</button>
                <div className="direct-contact">
                  <button className="email">email</button>
                  <button className="whatsapp">WhatsApp</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
