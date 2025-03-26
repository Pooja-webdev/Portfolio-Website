import React from "react";
import { Element } from "react-scroll";
import "./Skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";
import time from "../assets/time-management.png";
import idea from "../assets/idea.png";

const Skills = () => {
  return (
    <>
      <Element name="skills">
        <h1 className="skills-list"> SKILLS</h1>
        <div className="img-container">
          <div className="img-item">
            <img src={html} alt="html-img" className="html-img" title="HTML" />
            <p>HTML</p>
          </div>

          <div className="img-item">
            <img src={css} alt="css-img" className="css-img" title="CSS" />
            <p>CSS</p>
          </div>

          <div className="img-item">
            <img
              src={javascript}
              alt="javascript-img"
              className="js-img"
              title="JAVASCRIPT"
            />
            <p>JAVASCRIPT</p>
          </div>

          <div className="img-item">
            <img
              src={react}
              alt="react-img"
              className="react-img"
              title="REACT"
            />
            <p>REACT JS</p>
          </div>

          <div className="img-item">
            <img
              src={figma}
              alt="figma-img"
              className="figma-img"
              title="FIGMA"
            />
            <p>FIGMA</p>
          </div>

          <div className="img-item">
            <img
              src={canva}
              alt="canva-img"
              className="canva-img"
              title="CANVA"
            />
            <p>CANVA</p>
          </div>
        </div>

        <h3 className="soft-skills">Soft Skills</h3>
        <div className="list-container">
          <ul>
            <li>✅ Problem-Solving</li>
            <li>✅ Teamwork & Collaboration</li>
            <li>✅ Time Management</li>
            <li>✅ Communication</li>
            <li>✅ Attention to Detail</li>
          </ul>
          <img src={time} alt="time-management" />
          <img src={idea} alt="idea" />
        </div>
      </Element>
    </>
  );
};

export default Skills;
