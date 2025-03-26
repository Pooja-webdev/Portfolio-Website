import React from "react";
import "./Experience.css";
import { Element } from "react-scroll";
import AI from "../assets/AI image.webp";

const Experience = () => {
  return (
    <Element name="experience">
      <h1 className="experience-header"> EXPERIENCE</h1>
      <div className="experience-container">
        <div className="experience-content">
          <h3>Intern | ULTIweb Technologies[Apr 2024 – Jun 2024]</h3>

          <h4>Superapp</h4>
          <p>
            Created and improved UI features using ReactJS for a better user
            experience. Connected frontend with backend APIs to fetch and
            display data.
          </p>

          <h4>Coconut</h4>
          <p>
            Designed and built responsive UI components for smooth interactions.
            Optimized front-end code for faster performance.
          </p>
        </div>
        <div className="experience-img">
          <img src={AI} alt="work-image" />
        </div>
      </div>
    </Element>
  );
};

export default Experience;
