import React, { useEffect } from "react";
import "../css/MovingIcons.css";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import Icon4 from "../assets/icon4.svg";
import Icon5 from "../assets/icon5.svg";
import Icon6 from "../assets/icon6.svg";
import Icon7 from "../assets/icon7.svg";

const MovingIcons = () => {
  useEffect(() => {
    const iconsContainer = document.querySelector(".moving-icons");
    const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];
    const iconsCount = 12; // Number of icons to generate

    for (let i = 0; i < iconsCount; i++) {
      const icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.setAttribute("src", icons[Math.floor(Math.random() * icons.length)]);

      iconsContainer.appendChild(icon);

      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      icon.style.animationDuration = `${duration}s`;
      icon.style.animationDelay = `${delay}s`;
      icon.style.top = `${top}%`;
      icon.style.left = `${left}%`;
    }
  }, []);

  return <div className="moving-icons"></div>;
};

export default MovingIcons;
