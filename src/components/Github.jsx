import React from "react";
import "../css/GitHub.css";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="github-section">
      <div className="graph-container">
        <div>
            <h2>My GitHub Contributions</h2>
            <GitHubCalendar username="egan-ombaka" />
        </div>
      </div>
    </div>
  );
};

export default Github;
