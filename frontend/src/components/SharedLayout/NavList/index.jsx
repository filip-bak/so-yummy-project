import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.css";
import icon from "../../../images/icons.svg";

const NavList = ({ mobile = false, dark = false }) => {
  return (
    <ul
      className={`${styles.list} ${mobile && styles.column} ${
        dark && styles.dark
      }`}
    >
      <li>
        <NavLink className={styles.link} to="/categories/beef">
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/add">
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/my">
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/favorite">
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/shopping-list">
          Shopping list
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/search">
          <svg className={styles["search-icon"]}>
            <use href={`${icon}#icon-search`}></use>
          </svg>
          {mobile && "Search"}
        </NavLink>
      </li>
    </ul>
  );
};

NavList.propTypes = {
  mobile: PropTypes.bool,
};

export default NavList;
