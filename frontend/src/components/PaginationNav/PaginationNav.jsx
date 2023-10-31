import css from "./PaginationNav.module.css";
import PropTypes from "prop-types";
import icons from "../../images/icons.svg";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "redux/recipes/selectors";

export const PaginationNav = ({ increasePage, handlePageChange, disabled }) => {
  const currentPage = useSelector(selectCurrentPage);

  const handleCurrentPageChange = () => {
    const newPage = increasePage ? currentPage + 1 : currentPage - 1;
    handlePageChange(newPage);
  };

  return (
    <button
      className={css.button}
      onClick={handleCurrentPageChange}
      disabled={disabled}
    >
      <svg
        className={
          css.icon +
          (increasePage ? "" : " " + css.rotated) +
          (disabled ? " " : "")
        }
      >
        <use href={`${icons}#contacts-section-arrow-2`} />
      </svg>
    </button>
  );
};

PaginationNav.propTypes = {
  increasePage: PropTypes.bool.isRequired,
};
