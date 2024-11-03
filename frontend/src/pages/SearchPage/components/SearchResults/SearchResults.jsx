import css from "./SearchResults.module.css";
import { RecipeItem } from "@components/RecipeItem/RecipeItem";
import { Pagination } from "@components/Pagination/Pagination";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRecipes,
  selectResultsPerPage,
  selectTotalPages,
} from "@redux/recipes/selectors";
import { setResultsPerPage } from "@redux/recipes/slice";
import defaultImage from "@images/defaults/defaultImageStandard.jpg";

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
          <RecipeItem
            image={image || defaultImage}
            key={id}
            title={title}
            recipeId={id}
          />
        ))}
      </ul>
      {totalCount > resultsPerPage && (
        <Pagination recipesCount={totalCount} resultsPerPage={resultsPerPage} />
      )}
    </div>
  );
};
