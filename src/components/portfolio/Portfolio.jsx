import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Screen Shot 2022-10-26 at 11.22.34.png';
import IMG2 from '../../assets/Screen Shot 2022-10-26 at 17.02.32.png';
import IMG3 from '../../assets/ticTacToe.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Top-fighters',
    github: 'https://github.com/Or-Azaria/Top-Fighters',
    demo: 'https://top-fighters.netlify.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Roll-dice',
    github: 'https://github.com/Or-Azaria/roll-dice-game',
    demo: 'https://project-of-dice.netlify.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tic-Tac-Toe',
    github: 'https://github.com/Or-Azaria/Tic-tac-toe',
    demo: 'https://tic-tac-toe-enjoy.netlify.app/',
  },
  {
    id: 4,
    image:
      'https://media.istockphoto.com/vectors/coming-soon-no-photo-no-video-available-image-loading-screen-vector-vector-id1396577496?k=20&m=1396577496&s=612x612&w=0&h=DReRiFwJntCZbc2FJf53o3pV5U9XF2tbVraPAaO2M5k=',
    title: 'Coming Soon',
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
                  GitHub
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
