import css from "./MyRecipeItem.module.css";
import icons from "@images/icons.svg";
import Button from "@components/Button";
import defaultImage from "@images/defaults/defaultImageStandard.jpg";
import PropTypes from "prop-types";
import usePlaceholderImage from "@hooks/usePlaceholder";
import { useDispatch } from "react-redux";
import { removeMyRecipe } from "@redux/myRecipes/actions";
import { useNavigate } from "react-router-dom";

export const MyRecipeItem = ({ image, title, id, description, time }) => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const displayedImage = usePlaceholderImage(image, defaultImage);

  const handleRemove = () => {
    disptach(removeMyRecipe(id));
  };
  const handleInfo = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <li className={css.item}>
      <div className={css.container}>
        <div className={css.image_container}>
          <img src={displayedImage} className={css.image} alt="a dish"></img>
        </div>
        <div className={css.info_container}>
          <h3 className={css.dish_title}>{title}</h3>
          <p className={css.dish_description}>{description}</p>
          <p className={css.dish_time}>{`${time} min`}</p>
          <svg onClick={handleRemove} className={css.icon}>
            <use href={`${icons}#icon-trash`} />
          </svg>
          <div className={css.button}>
            <Button size="small" onClick={handleInfo}>
              See recipe
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

MyRecipeItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
};
