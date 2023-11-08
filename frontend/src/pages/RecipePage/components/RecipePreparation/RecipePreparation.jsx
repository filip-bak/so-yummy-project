import { useSelector } from "react-redux";
import css from "./RecipePreparation.module.css";
import { selectRecipe } from "redux/recipe/selectors";
import { useEffect, useState } from "react";
import defaultImage from "images/defaults/defaultImageStandard.jpg";
import usePlaceholderImage from "hooks/usePlaceholder";

export const RecipePreparation = () => {
  const recipe = useSelector(selectRecipe);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    setInstructions(
      recipe.instructions
        .split("\r\n")
        .filter(sentence => sentence.trim().length > 0)
        .filter(sentence => !sentence.startsWith("STEP "))
    );
  }, [recipe]);

  const displayedImage = usePlaceholderImage(recipe.thumb, defaultImage);

  return (
    <div className={css.container}>
      <div className={css.instructions_container}>
        <h4 className={css.title}>Recipe Preparation</h4>
        <ul className={css.instructions}>
          {instructions.map((sentence, index) => (
            <li className={css.instruction} key={index}>
              <div className={css.index_container}>
                <p className={css.index}>{index + 1}</p>
              </div>
              <p className={css.sentence}>{sentence}</p>
            </li>
          ))}
        </ul>
      </div>
      <img src={displayedImage} className={css.image} alt="a dish"></img>
    </div>
  );
};
