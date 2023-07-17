import React, { useState } from "react";
import "./Skill.css";
import { SkillContainer } from "./SkillContainer/SkillContainer";

const Skill = () => {
  return (
    <div className="skillMain">
      <h1 className="skillsh1" data-aos="fade-left">
        Skills
      </h1>
      <div className="skillImages">
        {SkillContainer.map((title) => {
          return (
            <div>
              <img
                data-aos="fade-up-right"
                className="imgBox"
                src={title.imgs}
                alt="img"
              />
              <p data-aos="fade-up-left" className="titleSkill">
                {title.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
