import { useSelector } from "react-redux";
import css from "./Shopping.module.css";
import { selectShoppingList } from "redux/shoppingList/selectors";
import { ShoppingListItem } from "pages/ShoppingListPage/components/ShoppingListItem/ShoppingListItem";

export const Shopping = () => {
  const shoppingList = useSelector(selectShoppingList);

  return (
    <div className={css.container}>
      <div className={css.header_container}>
        <p className={css.product}>Product</p>
        <ul className={css.properties}>
          <li className={css.property_item}>Number</li>
          <li className={css.property_item}>Remove</li>
        </ul>
      </div>
      <ul className={css.results}>
        {shoppingList.map(({ image, name, id, measure, recipeId }) => (
          <ShoppingListItem
            recipeId={recipeId}
            itemId={id}
            image={image}
            key={id + recipeId}
            name={name}
            measure={measure}
          />
        ))}
      </ul>
    </div>
  );
};
