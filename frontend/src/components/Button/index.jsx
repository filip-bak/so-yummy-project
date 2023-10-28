import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  variant = "primary",
  size = "default",
  unique,
  dark = false,
  children,
}) => {
  const validVariantss = {
    primary: {
      large: styles["primary-large"],
      medium: styles["primary-medium"],
      default: styles["primary"],
      small: styles["primary-small"],
    },
    secondary: {
      large: styles["secondary-large"],
      medium: styles["secondary-medium"],
      default: `${styles["secondary"]}`,
      small: styles["secondary-small"],
    },
    outline: {
      large: styles["outline-large"],
      medium: styles["outline-medium"],
      default: styles["outline"],
      small: styles["outline-small"],
    },
  };
  const validUnique = {
    short: styles.short,
    fill: styles.fill,
    svg: styles.svg,
  };

  const variantClass = validVariantss[variant]?.[size] || "";
  const uniqueClass = validUnique[unique] || "";
  const colorClass = dark === true ? styles["dark"] : "";

  const classes = [variantClass, colorClass, uniqueClass];
  const classNames = classes.filter(Boolean).join(" ");

  return (
    <button className={`${styles.container} ${classNames}`}>{children}</button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]).isRequired,
  size: PropTypes.oneOf(["small", "default", "medium", "large"]),
  unique: PropTypes.oneOf(["svg", "short"]),
  children: PropTypes.node,
};

export default Button;
