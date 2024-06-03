import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ text, href='#', newTab, className="" }) {
  return (
    <a
      className={`main-button ${className}`}
      href={href || "#"}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  newTab: PropTypes.bool,
  className: PropTypes.string,
};
