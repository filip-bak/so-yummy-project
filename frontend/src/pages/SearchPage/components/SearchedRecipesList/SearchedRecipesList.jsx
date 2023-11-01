import { NoContent } from "components/NoContent/NoContent";
import { SearchResults } from "pages/SearchPage/components/SearchResults/SearchResults";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchRecipes } from "redux/recipes/actions";
import { selectRecipes } from "redux/recipes/selectors";

export const SearchedRecipesList = () => {
  const dispatch = useDispatch();
  const { items, resultsPerPage } = useSelector(selectRecipes);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");
  const queryType = searchParams.get("queryType");
  const currentPage = searchParams.get("currentPage") ?? 1;

  const noContentMessage =
    query !== null && query.length > 0
      ? "Try looking for something else..."
      : "Enter the name of the ingredient and find the recipe...";

  useEffect(() => {
    if (query !== null && query.length > 0) {
      dispatch(fetchRecipes({ query, queryType, currentPage, resultsPerPage }));
    }
  }, [dispatch, query, queryType, currentPage, resultsPerPage]);

  return (
    <>
      {items.length > 0 ? (
        <SearchResults />
      ) : (
        <NoContent infoParagraph={noContentMessage} />
      )}
    </>
  );
};
