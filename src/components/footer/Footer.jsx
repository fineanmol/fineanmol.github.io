import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        <a href="https://www.linkedin.com/in/fineanmol/" className={isDark ? "dark-mode footer-text" : "footer-text"}>{emoji(`Made with ❤️ by Anmol Agarwal `)}</a>
        </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://www.nightowldevelopers.com/">
            NightOwlDevelopers
          </a>
        </p> */}
      </div>
    </Fade>
  );
}
