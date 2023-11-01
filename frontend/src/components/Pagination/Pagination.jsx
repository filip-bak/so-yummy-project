import { PaginationNav } from "components/PaginationNav/PaginationNav";
import css from "./Pagination.module.css";
import PropTypes from "prop-types";
import { selectCurrentPage } from "redux/recipes/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentPage } from "redux/recipes/slice";

export const Pagination = ({ recipesCount, resultsPerPage }) => {
  const dispatch = useDispatch();
  const numberOfPages = Math.ceil(recipesCount / resultsPerPage);
  const currentPage = useSelector(selectCurrentPage);
  const limit = 5;

  let startPage = Math.max(currentPage - Math.floor(limit / 2), 1);
  const endPage = Math.min(startPage + limit - 1, numberOfPages);

  if (endPage - startPage < limit - 1) {
    startPage = Math.max(endPage - limit + 1, 1);
  }

  let pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleCurrentPageChange = newCurrentPage => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(setCurrentPage(newCurrentPage));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className={css.container}>
      <PaginationNav
        increasePage={false}
        handlePageChange={handleCurrentPageChange}
        disabled={currentPage === 1}
      />
      {pageNumbers.map(i => (
        <button
          key={i}
          onClick={() => handleCurrentPageChange(i)}
          className={`${css.page_number} ${css.button} ${
            currentPage === i ? ` ${css.current_page}` : ""
          }`}
        >
          {i}
        </button>
      ))}
      <PaginationNav
        increasePage={true}
        handlePageChange={handleCurrentPageChange}
        disabled={currentPage === numberOfPages}
      />
    </div>
  );
};

Pagination.propTypes = {
  recipesCount: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
};
