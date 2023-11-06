import { useSelector } from "react-redux";
import css from "./RecipeIngredientsList.module.css";
import { selectRecipe } from "redux/recipe/selectors";
import { Ingredient } from "pages/RecipePage/components/Ingredient/Ingredient";
import { selectShoppingList } from "redux/shoppingList/selectors";
import PropTypes from "prop-types";

export const RecipeIngredientsList = () => {
  const recipe = useSelector(selectRecipe);
  const shoppingList = useSelector(selectShoppingList);
  const screenWidth = window.innerWidth;

  return (
    <div className={css.container}>
      <div className={css.header_container}>
        <p className={css.ingredients}>Ingredients</p>
        <ul className={css.properties}>
          <li className={css.property_item}>Number</li>
          <li className={css.property_item}>Add to list</li>
        </ul>
      </div>
      <ul className={css.results}>
        {recipe.ingredients.map(({ _id, ttl, measure, thb }) => (
          <Ingredient
            recipeId={recipe._id}
            itemId={_id}
            image={thb}
            key={_id}
            name={ttl}
            measure={measure}
            inShoppingList={
              shoppingList.find(
                item => item.recipeId === recipe._id && item.id === _id
              ) !== undefined
            }
            screenWidth={screenWidth}
          />
        ))}
      </ul>
    </div>
  );
};
RecipeIngredientsList.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};
