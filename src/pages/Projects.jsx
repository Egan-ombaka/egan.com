import React from 'react'
import '../css/Projects.css'

const projectsData = [
  {
    image: "images/portfolio.png",
    title: "Egan.com",
    description: "This is the portfolio website of Egan Ombaka, a Full-Stack Software Engineer and Entrepreneur. The website showcases Egan's skills, work experience, and contributions to various projects.",
    tech: ["REACT", "CSS", "VERCEL"],
    webLink: "",
    sourceCodeLink: ""
  },
  //more projects
  {
    image: "images/project.jpg",
    title: "Spotify stats",
    description: "This is the portfolio website of Egan Ombaka, a Full-Stack Software Engineer and Entrepreneur. The website showcases Egan's skills, work experience, and contributions to various projects.",
    tech: ["REACT", "API"],
    webLink: "",
    sourceCodeLink: ""
  },

  {
    image: "images/project.jpg",
    title: "Spotify stats",
    description: "This is the portfolio website of Egan Ombaka, a Full-Stack Software Engineer and Entrepreneur. The website showcases Egan's skills, work experience, and contributions to various projects.",
    tech: ["REACT", "API"],
    webLink: "",
    sourceCodeLink: ""
  },
];

const Projects = () => {
  return (
    <div className='projects-section'>
      <div className='project-container'>
        {projectsData.map((project, index) => (
          <div className='project-card' key={index}>
            <img className='project-image' src={project.image} alt={project.title} />
            <div className='project-description'>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-des'>{project.description}</p>
              <div className='tech'>
                {project.tech.map((techItem, techIndex) => (
                  <div key={techIndex}>{techItem}</div>
                ))}
              </div>
              <div className='project-links'>
                <button><a href={project.webLink}>Web</a></button>
                <button><a href={project.sourceCodeLink}>Source Code</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects