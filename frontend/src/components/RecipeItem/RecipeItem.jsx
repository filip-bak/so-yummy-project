import { useNavigate } from "react-router-dom";
import css from "./RecipeItem.module.css";
import usePlaceholderImage from "hooks/usePlaceholder";
import defaultImage from "images/defaults/defaultImageStandard.jpg";
import { selectIsLoading } from "redux/recipes/selectors";

export const RecipeItem = ({ recipeId, image, title }) => {
  const navigate = useNavigate();

  const displayedImage = usePlaceholderImage(
    image,
    defaultImage,
    selectIsLoading
  );

  return (
    <li className={css.item}>
      <div
        className={css.container}
        onClick={() => navigate(`/recipes/${recipeId}`)}
      >
        <img src={displayedImage} className={css.image} alt="a recipe"></img>
        <p className={css.label}>{title}</p>
      </div>
    </li>
  );
};
