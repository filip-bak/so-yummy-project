import React from "react";
import styles from "./MainTitle.module.css";

const MainTitle = ({ title, className }) => {
  return <h2 className={`${styles.title} ${className}`}>{title}</h2>;
};

export default MainTitle;
