import React from "react";
import "./About.css";
import developer from "../images/web developer.jpg";
const About = () => {
  return (
    <div className="aboutMain">
      <h1 className="abouth1" data-aos="fade-left">
        About Me
      </h1>
      <div className="aboutSection">
        <img className="imgAbout" data-aos="fade-right" src={developer} />
        <div className="para" data-aos="fade-up-left">
          <p className="center">
            An Honest, self-motivated, responsible, and hard-working person who
          </p>
          <p className="center">
            {" "}
            has a good knowledge of HTML, CSS, JavaSript, React, redux, Material
            UI.
          </p>
          <p className="center">
            {" "}
            A team worker and adaptable person. Looking forward to honing my
            skills
          </p>
          <p className="center"> in a challenging work environment. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
