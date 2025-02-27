import React from "react";
import "../css/Work.css";

const workExperiences = [
  {
    companyLogo: "images/mac.jpg",
    companyName: "Mac E. Electricals",
    duration: "Nov 2024 to PRESENT",
    position: "Front-end Software Engineer",
    description:
      "Designed and developed responsive web applications using HTML, CSS, JavaScript, and React. Collaborated with teams to create user-friendly interfaces, ensuring cross-device compatibility and performance. Conducted code reviews, debugging, and testing to deliver high-quality solutions while improving development workflows and adopting best practices.",
  },
  //more work experiences here
];

const Work = () => {
  return (
    <div className="work-experience">
      <div className="work-container">
        <h4 className="work">Work Experience</h4>
        {workExperiences.map((work, index) => (
          <div className="mac" key={index}>
            <div className="co-logo">
              <img
                className="company-logo"
                src={work.companyLogo}
                alt={work.companyName}
              />
            </div>
            <div className="work-info">
              <h5>
                {work.companyName} -{" "}
                {work.duration.split(" ").map((word, i) =>
                  word === "PRESENT" ? (
                    <span key={i} className="present">
                      {word}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </h5>
              <h5>{work.position}</h5>
              <p className="job-description">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
