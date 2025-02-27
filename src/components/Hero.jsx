import React from 'react'
import '../css/Hero.css'

const socialLinks = [
    { href: 'https://www.linkedin.com/in/egan-nyamisoa', src: 'icons/linkedin.svg', alt: 'LinkedIn', label: 'LinkedIn' },
    { href: 'https://github.com/egan-ombaka', src: 'icons/github.svg', alt: 'GitHub', label: 'GitHub' },
    { href: 'https://twitter.com/eganh_', src: 'icons/twitter.svg', alt: 'Twitter', label: 'X' }
  ]

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-container'>
          <div className='info-section'>
            <h2 className='job-title'>Full-stack software Engineer & Enterpreneur</h2>
            <p className='description'>I am a dynamic Full-Stack Software Engineer and Entrepreneur driven by innovation and a passion for technology. With a deep expertise spanning from sleek, intuitive front-end designs to robust, scalable back-end architectures, I excel in transforming complex challenges into elegant, user-focused solutions.</p>

            <div className='social-links'>
            {socialLinks.map((link, index) => (
              <div className='links' key={index}>
                <img className='icons' src={link.src} alt={link.alt} />
                <a href={link.href} target='_blank' rel='noopener noreferrer'>{link.label}</a>
              </div>
            ))}
          </div>
        </div>
        <div className='image-section'>
          <img className='profile-image' src="images/eganh.jpeg" alt="Egan Ombaka" />
        </div>
      </div>
    </div>
  )
}

export default Hero