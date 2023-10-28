import { NoContent } from "components/NoContent/NoContent";
import { SearchResults } from "components/SearchResults/SearchResults";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "redux/recipes/actions";
import { selectRecipes } from "redux/recipes/selectors";

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Effect");
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <>
      {recipes.length > 0 ? (
        <SearchResults />
      ) : (
        <NoContent infoParagraph="Enter the name of the ingredient and find the recipe..." />
      )}
    </>
  );
};
