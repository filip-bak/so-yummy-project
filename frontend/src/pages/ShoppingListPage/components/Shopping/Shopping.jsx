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
        {shoppingList.map(
          ({ ingredient: { image, name }, itemId, measure }) => (
            <ShoppingListItem
              itemId={itemId}
              image={image}
              key={itemId}
              name={name}
              measure={measure}
            />
          )
        )}
      </ul>
    </div>
  );
};
