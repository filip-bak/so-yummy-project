import css from "./RecipePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe } from "@redux/recipe/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchRecipeById } from "@redux/recipe/actions";
import { RecipePageHero } from "./components/RecipePageHero/RecipePageHero";
import { RecipeIngredientsList } from "./components/RecipeIngredientsList/RecipeIngredientsList";
import { RecipePreparation } from "./components/RecipePreparation/RecipePreparation";

export const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, recipeId]);

  const recipe = useSelector(selectRecipe);

  return (
    <>
      {recipe !== null && (
        <section className={css.section}>
          <div className={css.container}>
            <RecipePageHero
              title={recipe.title}
              description={recipe.description}
              time={recipe.time}
            />
            <RecipeIngredientsList />
            <RecipePreparation />
          </div>
        </section>
      )}
    </>
  );
};

export default RecipePage;
