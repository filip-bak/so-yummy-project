import css from "./MainPageTitle.module.css";
import PropTypes from "prop-types";

export const MainPageTitle = ({ title }) => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.element + " " + css.element_one} />
        <div className={css.element + " " + css.element_two} />
        <h2 className={css.title}>{title}</h2>
        <div className={css.element_three} />
      </div>
    </div>
  );
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
