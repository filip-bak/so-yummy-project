import { Categories } from "../Categories/Categories";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipes } from "redux/categories/selectors";
import { fetchAllRecipes } from "redux/categories/actions";

export const CategoriesList = () => {
  const recipes = useSelector(selectRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  return (
    <>
      {recipes.length > 0 ? <Categories /> : <div>Something went wrong...</div>}
    </>
  );
};
