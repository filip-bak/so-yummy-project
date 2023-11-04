import css from "./SearchResults.module.css";
import { SearchResultItem } from "pages/SearchPage/components/SearchResultItem/SearchResultItem";
import { Pagination } from "components/Pagination/Pagination";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRecipes,
  selectResultsPerPage,
  selectTotalPages,
} from "redux/recipes/selectors";
import { setResultsPerPage } from "redux/recipes/slice";

export const SearchResults = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectRecipes);
  const totalCount = useSelector(selectTotalPages);
  const resultsPerPage = useSelector(selectResultsPerPage);
  const prevResultsPerPage = useRef(6);

  useEffect(() => {
    const updateDimension = () => {
      const updatedResultsPerPage = window.innerWidth < 1440 ? 6 : 12;

      if (prevResultsPerPage.current !== updatedResultsPerPage) {
        prevResultsPerPage.current = updatedResultsPerPage;
        dispatch(setResultsPerPage(updatedResultsPerPage));
      }
    };
    window.addEventListener("resize", updateDimension);

    updateDimension();

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ul className={css.results}>
        {items.map(({ image, id, title }) => (
          <SearchResultItem image={image} key={id} title={title} />
        ))}
      </ul>
      {totalCount > resultsPerPage && (
        <Pagination recipesCount={totalCount} resultsPerPage={resultsPerPage} />
      )}
    </div>
  );
};
