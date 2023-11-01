import css from "./SearchResults.module.css";
import { SearchResultItem } from "pages/SearchPage/components/SearchResultItem/SearchResultItem";
import { Pagination } from "components/Pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipes } from "redux/recipes/selectors";
import { setResultsPerPage } from "redux/recipes/slice";

export const SearchResults = () => {
  const dispatch = useDispatch();
  const { items, totalCount, resultsPerPage } = useSelector(selectRecipes);

  useEffect(() => {
    const updateDimension = () => {
      dispatch(setResultsPerPage(window.innerWidth < 1440 ? 6 : 12));
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
