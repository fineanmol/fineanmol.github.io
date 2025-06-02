import React from "react";
import "./FullStackSkills";
import { fullStackSection } from "../../portfolio";

export default function FullStackSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {fullStackSection.softwareSkills.map((skills,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName} >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
