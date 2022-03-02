import React from "react";
import { Link } from "react-router-dom";
import "../../sass/home.scss";

const Intro = () => {
  return (
    <div id="intro-container" className="slide-in">
      <h3>
        Hi! I'm <span className="selected pulsate"> Daniel </span>
      </h3>
      <br></br>
      <h6>
        <span className="selected">Web</span> Developer /
      </h6>

      <h6>
        <span className="selected">Software</span> Engineer
      </h6>
      <br></br>
      <p id="tagline">
        ... and I LOVE{" "}
        <Link to="/portfolio">
          {" "}
          &#x007B;
          <span className="selected"> building </span> stuff &#x007D;{" "}
        </Link>{" "}
        with
        <span className="selected"> code</span>!! &#x2764;
      </p>
    </div>
  );
};

export default Intro;
