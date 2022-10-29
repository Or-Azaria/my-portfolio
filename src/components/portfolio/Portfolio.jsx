import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Screen Shot 2022-10-26 at 11.22.34.png";
import IMG2 from "../../assets/Screen Shot 2022-10-26 at 17.02.32.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Top-fighters",
    github: "https://github.com/Or-Azaria/Top-Fighters",
    demo: "https://top-fighters.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Roll-dice",
    github: "https://github.com/Or-Azaria/roll-dice-game",
    demo: "https://project-of-dice.netlify.app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Git hub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
