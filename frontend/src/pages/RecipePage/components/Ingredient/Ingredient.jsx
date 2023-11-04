import css from "./Ingredient.module.css";
import icons from "../../../../images/icons.svg";
// import { useDispatch } from "react-redux";
// import { addToShoppingList } from "redux/shoppingList/slice";

export const Ingredient = ({ ingredientId, image, name, measure }) => {
  // const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(addToShoppingList(ingredientId, measure));
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
        <button className={css.add_button} onClick={handleClick}>
          <svg className={css.icon}>
            <use href={`${icons}#icon-pick`} />
          </svg>
        </button>
      </div>
    </li>
  );
};
