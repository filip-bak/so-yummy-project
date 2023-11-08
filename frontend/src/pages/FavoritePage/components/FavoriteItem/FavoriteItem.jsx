import Button from "components/Button";
import usePlaceholderImage from "hooks/usePlaceholder";
import defaultImage from "images/defaults/defaultImageStandard.jpg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeFromFavorite } from "redux/favorite/actions";
import icons from "../../../../images/icons.svg";
import css from "./FavoriteItem.module.css";

export const FavoriteItem = ({ image, title, id, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayedImage = usePlaceholderImage(image, defaultImage);

  const handleSeeRecipe = () => {
    navigate(`/recipes/${id}`);
  };

  const handleDelete = () => {
    dispatch(removeFromFavorite(id));
  };
  return (
    <li className={css.item} key={id}>
      <div className={css.container}>
        <div className={css.image_container}>
          <img src={displayedImage} className={css.image} alt="a dish"></img>
        </div>
        <div className={css.info_container}>
          <h3 className={css.dish_title}>{title}</h3>
          <p className={css.dish_description}>{description}</p>
          <p className={css.dish_time}>{`${time} min`}</p>
          <svg onClick={handleDelete} className={css.icon}>
            <use href={`${icons}#icon-trash`} />
          </svg>

          <div className={css.button}>
            <Button size="small" unique="short" dark onClick={handleSeeRecipe}>
              See recipe
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

FavoriteItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};
