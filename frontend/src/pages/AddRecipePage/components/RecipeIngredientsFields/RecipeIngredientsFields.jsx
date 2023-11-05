import css from "./RecipeIngredientsFields.module.css";
import icons from "../../../../images/icons.svg";
import { useState } from "react";

export const RecipeIngredientsFields = () => {
  const amounts = ["tbs", "tsp", "kg", "g", "pcs", "ml"];
  const [ingredientExpanded, setIngredientExpanded] = useState(false);

  const handleOnClickIngredient = () => {
    setIngredientExpanded(!ingredientExpanded);
  };

  return (
    <div className={css.container}>
      <div className={css.title_container}>
        <h3 className={css.title}>Ingredients</h3>
        <div className={css.count_container}>
          <button className={css.decrease_button}>
            <svg className={css.icon_minus}>
              <use href={`${icons}#icon-ingredients-minus`} />
            </svg>
          </button>
          <span className={css.count}>1</span>
          <button className={css.increase_button}>
            <svg className={css.icon_plus}>
              <use href={`${icons}#icon-ingredients-plus`} />
            </svg>
          </button>
        </div>
      </div>
      <ul className={css.ingredients_container}>
        <li className={css.ingredient}>
          <div className={css.ingredient_container}>
            <label>
              <input
                className={css.ingredient_input}
                placeholder="Ingredient"
                type="text"
                name="ingredient-name"
                onClick={handleOnClickIngredient}
              />
            </label>
            {ingredientExpanded && (
              <div className={css.ingredient_drop_down}></div>
            )}
          </div>

          <div className={css.amount_container}>
            <label htmlFor="amountType">
              <input
                className={css.amount_input}
                defaultValue={0}
                type="text"
                min={0}
                max={30}
                name="amountType"
              />
              <select
                className={css.amount_select_box}
                id="amountType"
                name="amountType"
              >
                {amounts.map(amount => (
                  <option className={css.amount} value={amount}>
                    {amount}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className={css.cross_button}>
            <svg className={css.icon_cross}>
              <use href={`${icons}#icon-close`} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
