import css from "./ShoppingListItem.module.css";
import icons from "../../../../images/icons.svg";
import { useDispatch } from "react-redux";
import { removeFromShoppingList } from "redux/shoppingList/slice";

export const ShoppingListItem = ({ itemId, image, name, measure }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromShoppingList(itemId));
  };

  return (
    <li className={css.item}>
      <div className={css.container}>
        <div className={css.image_container}>
          <img src={image} className={css.image} alt="an ingredient"></img>
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
