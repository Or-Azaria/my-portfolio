import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import { FaReact } from "react-icons/fa";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <section id="header" className="container header__container">
        <h5>Hi I'm</h5>
        <span>
          <FaReact /> <h2>Or Azaria</h2>
        </span>
        <h5>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </section>
    </header>
  );
};

export default Header;
