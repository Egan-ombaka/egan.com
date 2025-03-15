import React, { useState } from "react";
import "../css/Dropdown.css";
import "../css/Header.css";

const Header = ({ setCurrentPage }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const result = await response.text();
    console.log(result);
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
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
                <form onSubmit={handleSubmit}>
                  <div className="input">
                    <input
                      className="input-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <input
                      className="input-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <input
                      className="input-message"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                    />
                  </div>
                  <button className="submit" type="submit">
                    SUBMIT
                  </button>
                </form>
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
