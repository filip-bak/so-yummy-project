import { NoContent } from "components/NoContent/NoContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorite } from "redux/favorite/actions";
import { selectFavorite } from "redux/favorite/selectors";
import { Favorites } from "../Favorites/Favorites";
import { useSearchParams } from "react-router-dom";

export const FavoriteList = () => {
  const favorite = useSelector(selectFavorite);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const currentPage = searchParams.get("currentPage") || 1;

  useEffect(() => {
    dispatch(fetchFavorite(currentPage));
  }, [dispatch, currentPage]);

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
