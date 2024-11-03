import React from "react";
import PropTypes from "prop-types";
import icon from "@images/icons.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = ({ reverse = false, className }) => {
  const logoClass = reverse ? styles["logo-reverse"] : styles.logo;

  return (
    <Link className={styles.container} to="/">
      <svg className={`${logoClass} ${className ? className : ""}`}>
        <use href={`${icon}#icon-logo`}></use>
      </svg>
    </Link>
  );
};

Logo.propTypes = {
  reverse: PropTypes.bool,
};

export default Logo;
