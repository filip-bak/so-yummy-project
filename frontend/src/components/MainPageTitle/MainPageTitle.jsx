import css from "./MainPageTitle.module.css";
import PropTypes from "prop-types";

export const MainPageTitle = ({ title }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
    </div>
  );
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
