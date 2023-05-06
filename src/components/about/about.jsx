import React from 'react';
import './about.css';

const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about__content container">
        <p>
          As a former athlete, I know firsthand how one moment can change the
          trajectory of your life. An injury during a game left me unable to
          play basketball, which forced me to reevaluate my future. While
          recovering, I discovered my passion for technology and full stack
          development.
          <br />
          <br />I was drawn to the creativity and problem-solving skills
          required to build something from scratch using code. Like basketball,
          full stack development requires teamwork, perseverance, and attention
          to detail, and I found myself fully immersed in this new world.
          Despite the setback from my injury, I feel grateful for discovering a
          new passion, and I'm committed to pursuing it with the same dedication
          and enthusiasm that I brought to basketball.
        </p>
      </div>
    </section>
  );
};

export default about;
