import css from "./ShoppingListItem.module.css";
import icons from "../../../../images/icons.svg";
import { useDispatch } from "react-redux";
import { removeIngredientFromShoppingList } from "redux/shoppingList/action";
import defaultImageSmall from "images/defaults/ingredientsDefault60x60.jpg";
import defaultImageMedium from "images/defaults/ingredientsDefault93x97.jpg";
import PropTypes from "prop-types";

export const ShoppingListItem = ({
  recipeId,
  itemId,
  image,
  name,
  measure,
  screenWidth,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      removeIngredientFromShoppingList({ ingredientId: itemId, recipeId })
    );
  };
  let selectedDefaultImage = defaultImageSmall;

  if (screenWidth >= 768) {
    selectedDefaultImage = defaultImageMedium;
  }
  return (
    <li className={css.item}>
      <div className={css.container}>
        <div className={css.image_container}>
          <img
            src={selectedDefaultImage}
            className={css.image}
            alt="an ingredient"
          ></img>
        </div>
        <p className={css.ingredient}>{name}</p>
        <div className={css.measure_container}>
          <center>
            <p className={css.measure}>{measure}</p>
          </center>
        </div>
        <button className={css.remove_button} onClick={handleClick}>
          <svg className={css.icon}>
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
      </div>
    </li>
  );
};
ShoppingListItem.propTypes = {
  recipeId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  screenWidth: PropTypes.number.isRequired, // Przyjmujemy, że screenWidth jest liczbą
};
