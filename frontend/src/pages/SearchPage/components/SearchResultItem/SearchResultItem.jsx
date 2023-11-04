import { useNavigate } from "react-router-dom";
import css from "./SearchResultItem.module.css";

export const SearchResultItem = ({ recipeId, image, title }) => {
  const navigate = useNavigate();
  return (
    <li className={css.item} key={image}>
      <div
        className={css.container}
        onClick={() => navigate(`/recipes/${recipeId}`)}
      >
        <img src={image} className={css.image} alt="a recipe"></img>
        <p className={css.label}>{title}</p>
      </div>
    </li>
  );
};
