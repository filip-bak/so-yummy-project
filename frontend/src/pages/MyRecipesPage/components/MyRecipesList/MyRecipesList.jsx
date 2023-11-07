import { NoContent } from "components/NoContent/NoContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyRecipes } from "redux/myRecipes/actions";
import { selectMyRecipes } from "redux/myRecipes/selectors";
import { MyRecipes } from "../MyRecipes/MyRecipes";

export const MyRecipesList = () => {
  const myRecipes = useSelector(selectMyRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  return (
    <>
      {myRecipes?.length > 0 ? (
        <MyRecipes />
      ) : (
        <NoContent infoParagraph="You don't have own recipes yet..." />
      )}
    </>
  );
};
