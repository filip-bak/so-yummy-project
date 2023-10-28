import { useSelector } from "react-redux";
import css from "./SearchResults.module.css";
import { selectRecipes } from "redux/recipes/selectors";
import { SearchResultItem } from "components/SearchResultItem/SearchResultItem";

export const SearchResults = () => {
  const recipes = useSelector(selectRecipes);

  return (
    <div className={css.container}>
      <ul className={css.results}>
        {recipes.map(({ image, id, title }) => (
          <SearchResultItem image={image} key={id} title={title} />
        ))}
      </ul>
    </div>
  );
};
