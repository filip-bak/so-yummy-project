import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoriesMenu.module.css";
import { selectCategoriesMenu } from "redux/menu/selectors";
import { useEffect } from "react";
import { fetchCategoriesMenu } from "redux/menu/actions";

export const CategoriesMenu = () => {
  const location = useLocation();
  const categories = useSelector(selectCategoriesMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesMenu());
  }, [dispatch]);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
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

export default CategoriesMenu;
