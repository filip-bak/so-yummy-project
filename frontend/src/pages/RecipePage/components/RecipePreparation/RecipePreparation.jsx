import { useSelector } from "react-redux";
import css from "./RecipePreparation.module.css";
import { selectRecipe } from "redux/recipe/selectors";

export const RecipePreparation = () => {
  const recipe = useSelector(selectRecipe);

  return (
    <div className={css.container}>
      <div className={css.instructions_container}>
        <h4 className={css.title}>Recipe Preparation</h4>
        <ul className={css.instructions}>
          {recipe.instructions.split("\r\n").map((sentence, index) => (
            <li className={css.instruction}>
              <div className={css.index_container}>
                <p className={css.index}>{index + 1}</p>
              </div>
              <p className={css.sentence}>{sentence}</p>
            </li>
          ))}
        </ul>
      </div>
      <img src={recipe.thumb} className={css.image} alt="a dish"></img>
    </div>
  );
};
