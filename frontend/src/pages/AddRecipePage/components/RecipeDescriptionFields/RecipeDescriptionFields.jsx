import css from "./RecipeDescriptionFields.module.css";
import icons from "../../../../images/icons.svg";

export const RecipeDescriptionFields = () => {
  const categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

  let cookingTimes = [];
  for (let i = 5; i <= 120; i = i + 5) {
    cookingTimes.push(
      <option className={css.cooking_time} value="cookingTime">
        {i}
      </option>
    );
  }

  return (
    <div className={css.container}>
      <div className={css.input_container}>
        <input
          className={css.photo_input}
          type="file"
          accept="image/*,.png,.jpg,.web"
          name="thumb"
        />
        <div className={css.icon_container}>
          <svg className={css.icon}>
            <use href={`${icons}#icon-photo-add-recipe`} />
          </svg>
        </div>
      </div>
      <div className={css.labels_container}>
        <label className={css.recipe_label}>
          <input
            className={css.recipe_input}
            placeholder="Enter item title"
            type="text"
            name="title"
          />
        </label>
        <label className={css.recipe_label}>
          <input
            className={css.recipe_input}
            placeholder="Enter about recipe"
            type="text"
            name="description"
          />
        </label>
        <div className={css.label_container}></div>
        <label className={css.label} htmlFor="categoryType">
          Category
          <select
            className={css.select_box}
            id="categoryType"
            name="categoryType"
          >
            {categories.map(category => (
              <option className={css.category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <div className={css.label_container}>
          <label className={css.label} htmlFor="cookingTime">
            Cooking time
            <select
              className={css.select_box}
              id="cookingTime"
              name="cookingTime"
            >
              {cookingTimes}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
