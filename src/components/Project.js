import React, { useState } from "react";
import "./Project.css";
import { ProjectContainer } from "./ProjectConatiner/ProjectContainer";

const Project = () => {
  return (
    <div className="p1">
      <h1 className="p2" data-aos="fade-left">
        Our Projects
      </h1>
      <div className="projectMain">
        {ProjectContainer.map((title) => {
          return (
            <div className="box" data-aos="fade-up-right">
              <div className="cardbaground">
                <h3 className="projectTitle1">{title.Title}</h3>
                <img className="imgBox" src={title.img} />
              </div>
              <div className="cardbaground1">
                <h3 className="projectTitle">{title.Title}</h3>
                <p className="projectDescription">{title.Description}</p>
                <div className="projectChild">
                  <button className="btnProject">SOURCE CODE</button>
                  <button className="btnProject">VISIT</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
