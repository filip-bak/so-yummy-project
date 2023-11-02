import { Pagination } from "components/Pagination/Pagination";
import css from "./Favorites.module.css";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";
import { useSelector } from "react-redux";
import { selectFavorite } from "redux/favorite/selectors";

export const Favorites = () => {
  const favorites = useSelector(selectFavorite);
  const resultsPerPage = 4;

  return (
    <div className={css.container}>
      <ul className={css.results}>
        {favorites.map(({ image, id, title, description, time }) => (
          <FavoriteItem
            image={image}
            key={id}
            title={title}
            description={description}
            time={time}
          />
        ))}
      </ul>
      {favorites.length > resultsPerPage && (
        <Pagination
          recipesCount={favorites.length}
          resultsPerPage={resultsPerPage}
        />
      )}
    </div>
  );
};
