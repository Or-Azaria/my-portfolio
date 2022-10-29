import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h2>services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
