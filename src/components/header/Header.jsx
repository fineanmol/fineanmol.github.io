import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const location = useLocation();
  const isAdventCalendar = location.pathname === '/cssadventcalender';
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const validHref = "/";

  return (
    <Headroom>
      <header className={isAdventCalendar ? "advent-header dark-menu header" : (isDark ? "dark-menu header" : "header")}>
        <Link to={validHref} className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              {isAdventCalendar ? (
                <Link to="/#skills">Skills</Link>
              ) : (
                <a href="#skills">Skills</a>
              )}
            </li>
          )}
          {viewExperience && (
            <li>
              {isAdventCalendar ? (
                <Link to="/#experience">Experience</Link>
              ) : (
                <a href="#experience">Experience</a>
              )}
            </li>
          )}
          {viewOpenSource && (
            <li>
              {isAdventCalendar ? (
                <Link to="/#opensource">Projects</Link>
              ) : (
                <a href="#opensource">Projects</a>
              )}
            </li>
          )}
          {viewAchievement && (
            <li>
              {isAdventCalendar ? (
                <Link to="/#achievements">Achievements</Link>
              ) : (
                <a href="#achievements">Achievements</a>
              )}
            </li>
          )}
          <li>
            <Link to="/cssadventcalender">🎄 Advent</Link>
          </li>
          <li>
            {isAdventCalendar ? (
              <Link to="/#contact">Contact</Link>
            ) : (
              <a href="#contact">Contact</a>
            )}
          </li>
          {!isAdventCalendar && (
            <li>
              <a href="#home">
                <ToggleSwitch />
              </a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
