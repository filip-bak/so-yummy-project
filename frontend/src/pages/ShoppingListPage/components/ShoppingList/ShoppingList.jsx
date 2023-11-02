import { NoContent } from "components/NoContent/NoContent";
import { useSelector } from "react-redux";
import { selectShoppingList } from "redux/shoppingList/selectors";
import { Shopping } from "../Shopping/Shopping";

export const ShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);

  return (
    <>
      {shoppingList.length > 0 ? (
        <Shopping />
      ) : (
        <NoContent infoParagraph="You don't have any ingredients..." />
      )}
    </>
  );
};
