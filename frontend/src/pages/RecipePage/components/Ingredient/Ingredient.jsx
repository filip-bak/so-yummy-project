import css from "./Ingredient.module.css";
import icons from "../../../../images/icons.svg";
import { useDispatch } from "react-redux";
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
} from "redux/shoppingList/action";
import PropTypes from "prop-types";

export const Ingredient = ({
  recipeId,
  itemId,
  image,
  name,
  measure,
  inShoppingList,
}) => {
  const dispatch = useDispatch();

  const handleAddToShoppingList = () => {
    dispatch(addIngredientToShoppingList({ recipeId, ingredientId: itemId }));
  };

  const handleRemovalFromShoppingList = () => {
    dispatch(
      removeIngredientFromShoppingList({ recipeId, ingredientId: itemId })
    );
  };

  return (
    <li className={css.item}>
      <div className={css.image_container}>
        <img src={image} className={css.image} alt="an ingredient"></img>
        <p className={css.ingredient}>{name}</p>
      </div>
      <div className={css.measure_container}>
        <center>
          <p className={css.measure}>{measure}</p>
        </center>
      </div>
      <div className={css.button_container}>
        <button
          className={css.add_button}
          onClick={() =>
            inShoppingList
              ? handleRemovalFromShoppingList()
              : handleAddToShoppingList()
          }
        >
          {inShoppingList && (
            <svg className={css.icon}>
              <use href={`${icons}#icon-pick`} />
            </svg>
          )}
        </button>
      </div>
    </li>
  );
};

Ingredient.propTypes = {
  image: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  inShoppingList: PropTypes.bool.isRequired,
};
