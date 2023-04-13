import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Movix is a movie searching app that lets users discover the latest
          movies and TV shows with IMDb ratings. It also includes features to
          watch trailers and check out the cast of films. With an intuitive
          interface and advanced search options, Movix makes it easy for users
          to find and enjoy their favorite movies and TV shows.
          <hr />
          <br />
          <p> Made with love for all movie lovers ~ By Shivnandan Jha</p>
          <p>Find me on</p>
        </div>
        <div className="socialIcons">
          <a href="https://github.com/ShivNandanJha" target="_blank">
            {" "}
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://codepen.io/Shivi-Code"  target="_blank" >
            <span className="icon">
              <FaCodepen />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/shiv-nandan-jha-4179a4251/" target="_blank">
            <span className="icon">
              <FaLinkedin />
            </span>{" "}
          </a>

          <a href = "https://www.instagram.com/probably_shiv/" target = "_blank">
            {" "}
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
