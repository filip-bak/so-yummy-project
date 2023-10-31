import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./CategoriesList.module.css";

const CategoriesList = ({ categories }) => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          {categories.map(val => (
            <NavLink
              className={`${styles.link} ${
                location.pathname.includes(val.title) ? styles.active : ""
              }`}
              key={val._id}
              to={`/categories/${val.title}`}
            >
              {val.title}
            </NavLink>
          ))}
        </div>
        <span className={styles.borderLine}></span>
      </div>
    </div>
  );
};

export default CategoriesList;
