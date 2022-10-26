import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Screen Shot 2022-10-26 at 11.22.34.png";
import IMG2 from "../../assets/Screen Shot 2022-10-26 at 11.22.44.png";

// links for applications - https://project-of-dice.netlify.app/ \\ https://top-fighters.netlify.app/
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>this is a portfolio title</h3>
          <a href=""></a>
          <a href=""></a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
