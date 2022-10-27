import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Or Azaria
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/or.azarya.5/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/habesha_baller/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/OrAzarya">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;2022 Or Azaria Fullstack Developer</small>
      </div>
    </footer>
  );
};

export default Footer;
