import { NoContent } from "components/NoContent/NoContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorite } from "redux/favorite/actions";
import { selectFavorite } from "redux/favorite/selectors";
import { Favorites } from "../Favorites/Favorites";

export const FavoriteList = () => {
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  return (
    <>
      {favorite.length > 0 ? (
        <Favorites />
      ) : (
        <NoContent infoParagraph="You don't have favorite recipes yet..." />
      )}
    </>
  );
};
