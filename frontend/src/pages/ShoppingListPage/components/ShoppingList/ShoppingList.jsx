import { NoContent } from "components/NoContent/NoContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingList } from "redux/shoppingList/actions";
import { selectShoppingList } from "redux/shoppingList/selectors";
import { Shopping } from "../Shopping/Shopping";

export const ShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

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
