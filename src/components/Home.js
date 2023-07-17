import React from "react";
import { useEffect } from "react";
import "./Home.css";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="homeMain">
      <div>
        <h4 className="homeh4" data-aos="fade-left">
          HELLO I'M{" "}
        </h4>
        <h1 className="homeh1" data-aos="fade-up-right">
          <Typewriter
            words={["GOVINDHARAJ", "REACT JS DEVELOPER"]}
            loop={true}
            cursor
            cursorStyle="_"
            cursorColor="#97f107"
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={5}
          />
        </h1>
        <h1 className="homeheader" data-aos="fade-right">
          I enjoy{" "}
          <span className="span1" data-aos="fade-right">
            building{" "}
          </span>
          and{" "}
          <span data-aos="fade-right" className="span2">
            Designing{" "}
          </span>
        </h1>
        <h1 className="homeheader1" data-aos="fade-up-left">
          for the web.
        </h1>
        <div className="btnCenter">
          <button className="btnHome" data-aos="fade-up-right">
            Download CV
          </button>
        </div>
      </div>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
