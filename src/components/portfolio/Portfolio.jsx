import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Screen Shot 2022-10-26 at 11.22.34.png";
import IMG2 from "../../assets/Screen Shot 2022-10-26 at 11.22.44.png";

// links for applications - https://project-of-dice.netlify.app/
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="fighters" />
          </div>
          <h3>this is a portfolio title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Or-Azaria/Top-Fighters"
              className="btn"
              target="_blank"
            >
              Git hub
            </a>
            <a
              href="https://top-fighters.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="fighters" />
          </div>
          <h3>this is a portfolio title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Or-Azaria/Top-Fighters"
              className="btn"
              target="_blank"
            >
              Git hub
            </a>
            <a
              href="https://top-fighters.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
