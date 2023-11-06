import css from "./FavoriteItem.module.css";
import icons from "../../../../images/icons.svg";
import Button from "components/Button";
import { useNavigate, useParams } from "react-router";
import { removeFromFavorite } from "redux/favorite/actions";
import { useDispatch } from "react-redux";

export const FavoriteItem = ({ image, title, id, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <img src={image} className={css.image} alt="a dish"></img>
        </div>
        <div className={css.info_container}>
          <h3 className={css.dish_title}>{title}</h3>
          <p className={css.dish_description}>{description}</p>
          <p className={css.dish_time}>{`${time} min`}</p>
          <button onClick={handleDelete}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-trash`} />
            </svg>
          </button>

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
