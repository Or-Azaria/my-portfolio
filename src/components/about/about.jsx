import React from "react";
import "./about.css";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__content container">
        <p>
          I am a determined, persistent hardworking programmer who gives high
          service awareness. Stresses the importance of meeting goals and tasks,
          loves and encourages teamwork. Provides a professional solution, and
          solves problems effectively with persuasiveness thoroughness, and
          effective conduct.
        </p>
        <a href="#contact" className="btn btn-primary">
          Le`ts Talk
        </a>
      </div>
    </section>
  );
};

export default about;
