import css from "./Ingredient.module.css";
import icons from "../../../../images/icons.svg";
import { useDispatch } from "react-redux";
import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
} from "redux/shoppingList/action";
import defaultImageSmall from "images/defaults/ingredientsDefault57x57.jpg";
import defaultImageMedium from "images/defaults/ingredientsDefault112x112.jpg";
import defaultImageLarge from "images/defaults/ingredientsDefault128x128.jpg";

export const Ingredient = ({
  recipeId,
  itemId,
  image,
  name,
  measure,
  inShoppingList,
  screenWidth,
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
  let selectedDefaultImage = defaultImageSmall;

  if (screenWidth >= 768 && screenWidth < 1440) {
    selectedDefaultImage = defaultImageMedium;
  } else if (screenWidth >= 1440) {
    selectedDefaultImage = defaultImageLarge;
  }

  return (
    <li className={css.item}>
      <div className={css.image_container}>
        <img
          src={image || selectedDefaultImage}
          className={css.image}
          alt="an ingredient"
        ></img>
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
