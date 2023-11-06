import css from "./RecipeIngredientsFields.module.css";
import icons from "../../../../images/icons.svg";
import { useState } from "react";

export const RecipeIngredientsFields = () => {
  const defaultValues = {
    name: "",
    amount: 0,
    amountType: "tbs",
    expanded: false,
  };
  const amounts = ["tbs", "tsp", "kg", "g", "pcs", "ml"];

  const [ingredients, setIngredients] = useState([defaultValues]);

  const handleOnClickIngredient = index => {
    ingredients[index].expanded = !ingredients[index].expanded;
    setIngredients([...ingredients]);
  };

  const hideIngredientDropDown = index => {
    ingredients[index].expanded = false;
    setIngredients([...ingredients]);
  };

  const handleAdditionalIngredient = () => {
    if (ingredients.length === 30) {
      return false;
    }
    ingredients.push(defaultValues);
    setIngredients([...ingredients]);
  };

  const handleDeletionOflIngredient = () => {
    if (ingredients.length === 1) {
      return false;
    }
    ingredients.pop();
    setIngredients([...ingredients]);
  };

  const handleIngredientRemoval = index => {
    if (ingredients.length === 1) {
      return false;
    }
    ingredients.splice(index, 1);
    setIngredients([...ingredients]);
  };

  const handleIngredientFieldChange = (field, evt, index) => {
    ingredients[index][field] = evt.target.value;
    setIngredients([...ingredients]);
  };

  return (
    <div className={css.container}>
      <div className={css.title_container}>
        <h3 className={css.title}>Ingredients</h3>
        <div className={css.count_container}>
          <button
            className={css.decrease_button}
            onClick={handleDeletionOflIngredient}
            type="button"
          >
            <svg className={css.icon_minus}>
              <use href={`${icons}#icon-ingredients-minus`} />
            </svg>
          </button>
          <span className={css.count}>{ingredients.length}</span>
          <button
            className={css.increase_button}
            onClick={handleAdditionalIngredient}
            type="button"
          >
            <svg className={css.icon_plus}>
              <use href={`${icons}#icon-ingredients-plus`} />
            </svg>
          </button>
        </div>
      </div>
      <ul className={css.ingredients_container}>
        {ingredients.map((ingredient, index) => (
          <li className={css.ingredient} key={index}>
            <div className={css.ingredient_container}>
              <label>
                <input
                  className={css.ingredient_input}
                  placeholder="Ingredient"
                  type="text"
                  name="ingredient-name"
                  onClick={() => handleOnClickIngredient(index)}
                  onBlur={() => hideIngredientDropDown(index)}
                  value={ingredient.name}
                  onChange={event =>
                    handleIngredientFieldChange("name", event, index)
                  }
                />
              </label>
              {ingredient.expanded && (
                <div className={css.ingredient_drop_down}></div>
              )}
            </div>

            <div className={css.amount_container}>
              <label htmlFor="amount">
                <input
                  className={css.amount_input}
                  type="text"
                  name="amount"
                  value={ingredient.amount}
                  onChange={event =>
                    handleIngredientFieldChange("amount", event, index)
                  }
                />
              </label>
              <select
                className={css.amount_select_box}
                id="amountType"
                name="amountType"
                value={ingredient.amountType}
                onChange={event =>
                  handleIngredientFieldChange("amountType", event, index)
                }
              >
                {amounts.map(amount => (
                  <option className={css.amount} value={amount} key={amount}>
                    {amount}
                  </option>
                ))}
              </select>
            </div>
            <button
              className={css.cross_button}
              type="button"
              onClick={() => handleIngredientRemoval(index)}
            >
              <svg className={css.icon_cross}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
