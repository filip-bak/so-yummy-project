import { PaginationNav } from "components/PaginationNav/PaginationNav";
import css from "./Pagination.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Pagination = ({ recipesCount, resultsPerPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const numberOfPages = Math.ceil(recipesCount / resultsPerPage);
  const paramWithCurrentPage = searchParams.get("currentPage");
  const currentPage = paramWithCurrentPage ? parseInt(paramWithCurrentPage) : 1;
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
    setSearchParams(params => {
      params.set("currentPage", newCurrentPage);
      return params;
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className={css.container}>
      <PaginationNav
        increasePage={false}
        handlePageChange={() => handleCurrentPageChange(currentPage - 1)}
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
        handlePageChange={() => handleCurrentPageChange(currentPage + 1)}
        disabled={currentPage === numberOfPages}
      />
    </div>
  );
};

Pagination.propTypes = {
  recipesCount: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
};
