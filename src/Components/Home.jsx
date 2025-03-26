import React from "react";
import "./Home.css";
import BackgroundImage from "../assets/BackgroundImage.jpg";
import { Element } from "react-scroll";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${BackgroundImage})`,
  };

  return (
    <Element name="home">
      <div className="container" style={containerStyle}>
        <div className="content">
          <h2>
            I am <span className="myname">Pooja</span>
          </h2>
          <h4>Frontend Developer</h4>
          <p>
            Enthusiastic Frontend Developer proficient in React, JavaScript,
            Html and CSS, eager to create responsive and interactive web
            applications.
          </p>
          <a href="/Resume.pdf">
          <button className="view-btn">View Resume</button>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Home;
