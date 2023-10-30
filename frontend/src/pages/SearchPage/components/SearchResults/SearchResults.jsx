import { useSelector } from "react-redux";
import css from "./SearchResults.module.css";
import { selectRecipes } from "redux/recipes/selectors";
import { SearchResultItem } from "pages/SearchPage/components/SearchResultItem/SearchResultItem";
import { Pagination } from "components/Pagination/Pagination";
import { useEffect, useState } from "react";

export const SearchResults = () => {
  const recipes = useSelector(selectRecipes);
  const [resultsPerPage, setResultsPerPage] = useState(6);

  useEffect(() => {
    const updateDimension = () => {
      setResultsPerPage(window.innerWidth < 1440 ? 6 : 12);
    };
    window.addEventListener("resize", updateDimension);

    updateDimension();

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <div className={css.container}>
      <ul className={css.results}>
        {recipes.map(({ image, id, title }) => (
          <SearchResultItem image={image} key={id} title={title} />
        ))}
      </ul>
      {recipes.length > resultsPerPage && (
        <Pagination
          recipesCount={recipes.length}
          resultsPerPage={resultsPerPage}
        />
      )}
    </div>
  );
};
