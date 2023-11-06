import { useNavigate } from "react-router-dom";
import css from "./RecipeItem.module.css";

export const RecipeItem = ({ recipeId, image, title }) => {
  const navigate = useNavigate();
  return (
    <li className={css.item}>
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
