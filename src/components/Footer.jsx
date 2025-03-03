import React from 'react'
import '../css/Footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='footer-section'>
        <div className="footer">
          <p>&copy; {currentYear} Egan Ombaka. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer