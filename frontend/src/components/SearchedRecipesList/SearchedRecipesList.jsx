import { NoContent } from "components/NoContent/NoContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "redux/recipes/actions";
import { selectRecipes } from "redux/recipes/selectors";

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectRecipes);
  console.log("Here");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Effect");
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <>
      {recipes.length > 0 ? (
        <h3>PRÓBA</h3>
      ) : (
        <NoContent infoParagraph="Enter the name of the ingredient and find the recipe..." />
      )}
    </>
  );
};
