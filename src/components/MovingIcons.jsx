import React from "react";
import "../css/MovingIcons.css";

const MovingIcons = ({ icons }) => {
  return (
    <div className="techstack-section">
      <div className="techstack-container">
        {icons.map((icon, index) => (
          <img
            key={index}
            className="tech-logo"
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingIcons;
