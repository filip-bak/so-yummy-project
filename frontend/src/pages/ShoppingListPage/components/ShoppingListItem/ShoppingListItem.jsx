import usePlaceholderImage from "hooks/usePlaceholder";
import defaultImageSmall from "images/defaults/ingredientsDefault60x60.jpg";
import defaultImageMedium from "images/defaults/ingredientsDefault93x97.jpg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeIngredientFromShoppingList } from "redux/shoppingList/action";
import icons from "../../../../images/icons.svg";
import css from "./ShoppingListItem.module.css";

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

  const displayedImage = usePlaceholderImage(image, selectedDefaultImage);

  return (
    <li className={css.item}>
      <div className={css.container}>
        <div className={css.image_container}>
          <img
            src={displayedImage}
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
  recipeId: PropTypes.string,
  itemId: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  measure: PropTypes.string,
};
