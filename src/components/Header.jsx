import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header-section'>
      <div className='header'>
        <div className='logo-container'>
            <h4 className='logo'>Eganh</h4>
        </div>

        <ul className='navbar'>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
        </ul>

        <div className='contact-icon'>
            <img className='contact-svg' src="icons/contact.svg" alt="Contact" />
        </div>
      </div>
    </div>
  )
}

export default Header
