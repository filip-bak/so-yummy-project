import { useNavigate } from "react-router-dom";
import css from "./RecipeItem.module.css";
import PropTypes from "prop-types";

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

RecipeItem.propTypes = {
  recipeId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
