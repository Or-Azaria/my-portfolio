import React from "react";
import "./about.css";

const about = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me"></div>
        <div className="about__me-img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="about__content"></div>
    </section>
  );
};

export default about;
