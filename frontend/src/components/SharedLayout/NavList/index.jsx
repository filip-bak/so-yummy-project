import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NavList.module.css";
import icon from "../../../images/icons.svg";

const NavList = ({ mobile = false }) => {
  return (
    <ul className={`${styles.list}  ${mobile && styles.column}`}>
      <li>
        <Link className={styles.link} to="/categories/Beef">
          Categories
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/add">
          Add recipes
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/my">
          My recipes
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/favorite">
          Favorites
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/shopping-list">
          Shopping list
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/search">
          <svg className={styles["search-icon"]}>
            <use href={`${icon}#icon-search`}></use>
          </svg>
          {mobile && "Search"}
        </Link>
      </li>
    </ul>
  );
};

NavList.propTypes = {
  mobile: PropTypes.bool,
};

export default NavList;
