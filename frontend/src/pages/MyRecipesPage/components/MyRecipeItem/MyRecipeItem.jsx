import css from "./MyRecipeItem.module.css";
import icons from "../../../../images/icons.svg";
import Button from "components/Button";
import defaultImage from "images/defaults/defaultImageStandard.jpg";

export const MyRecipeItem = ({ image, title, id, description, time }) => {
  return (
    <li className={css.item} key={id}>
      <div className={css.container}>
        <div className={css.image_container}>
          <img
            src={image || defaultImage}
            className={css.image}
            alt="a dish"
          ></img>
        </div>
        <div className={css.info_container}>
          <h3 className={css.dish_title}>{title}</h3>
          <p className={css.dish_description}>{description}</p>
          <p className={css.dish_time}>{`${time} min`}</p>
          <svg className={css.icon}>
            <use href={`${icons}#icon-trash`} />
          </svg>
          <div className={css.button}>
            <Button size="small">See recipe</Button>
          </div>
        </div>
      </div>
    </li>
  );
};
