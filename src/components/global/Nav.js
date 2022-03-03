import React from "react";
import "../sass/nav.scss";
import logo from "../../../src/images/logo.gif";
import github_logo from "../../images/github-logo.png";
import linkedin_logo from "../../images/linkedin-logo.png";

const Nav = () => {
  return (
    <div id="nav-container">
      <div id="nav-bar">
        <a href="/">
          <div id="logo-container">
            <img src={logo} id="logo" alt="logo" />
          </div>
        </a>
        <div id='social-container'>
          <a
            href="https://github.com/dcassar622"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github_logo} alt="Github Logo"></img>{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-cassar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin_logo} alt="Linkedin Logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
