import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <section id="header" className="container header__container">
        <h5>Hi Im</h5>
        <h2>Or Azaria</h2>
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
