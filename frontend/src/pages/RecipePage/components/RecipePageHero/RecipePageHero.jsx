import css from "./RecipePageHero.module.css";
import Button from "components/Button";
import icons from "../../../../images/icons.svg";

export const RecipePageHero = ({ title, description, time }) => {
  return (
    <section className={css.section_banner}>
      <div className={css.container}>
        <div className={css.recipe_container}>
          <h3 className={css.recipe_title}>{title}</h3>
          <p className={css.recipe_description}>{description}</p>
          <Button variant="outline" size="small">
            Add to favorite recipes
          </Button>
          <div className={css.time_container}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-clock`} />
            </svg>
            <p className={css.dish_time}>{`${time} min`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
