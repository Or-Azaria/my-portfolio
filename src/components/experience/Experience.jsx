import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend development</h3>
          <div className="experience__contact">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>SCSS</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>bootstrap</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>backend development</h3>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>Python</h4>
            <small className="text-light">experienced</small>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>Node.js</h4>
            <small className="text-light">experienced</small>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>express</h4>
            <small className="text-light">experienced</small>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>Flask</h4>
            <small className="text-light">experienced</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
