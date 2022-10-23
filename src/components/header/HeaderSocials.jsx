import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <section id="footer" className="header_socials">
      <a href="https://www.linkedin.com/in/or-azaria-66156b211" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/Or-Azaria" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.facebook.com/or.azarya.5/" target="_blank">
        <AiFillFacebook />
      </a>
    </section>
  );
};

export default HeaderSocials;
