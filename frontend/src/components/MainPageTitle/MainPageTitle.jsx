import css from "./MainPageTitle.module.css";
import PropTypes from "prop-types";

export const MainPageTitle = ({ title, dots = true }) => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        {dots && (
          <>
            <div className={css.element + " " + css.element_one} />
            <div className={css.element + " " + css.element_two} />
            <div className={css.element + " " + css.element_three} />
            <div className={css.element_three} />
          </>
        )}
        <h2 className={css.title}>{title}</h2>
      </div>
    </div>
  );
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
