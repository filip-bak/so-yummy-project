import { useDispatch } from "react-redux";
import icons from "../../../../images/icons.svg";
import css from "./RecipeDescriptionFields.module.css";
import { updateRecipePicture } from "redux/recipe/actions";

export const RecipeDescriptionFields = ({ recipeImage }) => {
  const dispatch = useDispatch();
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
      <option className={css.cooking_time} value={i} key={i}>
        {i}
      </option>
    );
  }

  const handleSendRecipePicture = e => {
    const thumb = e.target;
    if (!thumb.files[0]) return;

    dispatch(updateRecipePicture(thumb));
  };

  return (
    <div className={css.container}>
      {recipeImage ? (
        <div className={css.photo_container}>
          <input
            className={css.photo_input}
            type="file"
            accept="image/*,.png,.jpg,.web"
            name="thumb"
            id="thumb"
            onChange={handleSendRecipePicture}
          />
          <label htmlFor="thumb">
            <div className={css.icon_container}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-photo-add-recipe`} />
              </svg>
            </div>
          </label>
          <img className={css.photo_uploaded} src={recipeImage} alt="Recipe" />
        </div>
      ) : (
        <div className={css.photo_container}>
          <input
            className={css.photo_input}
            type="file"
            accept="image/*,.png,.jpg,.web"
            name="thumb"
            id="thumb"
            onChange={handleSendRecipePicture}
          />
          <label htmlFor="thumb">
            <div className={css.icon_container}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-photo-add-recipe`} />
              </svg>
            </div>
          </label>
        </div>
      )}

      <div className={css.labels_container}>
        <label className={css.recipe_label}>
          <input
            className={css.recipe_input}
            placeholder="Enter item title"
            type="text"
            name="title"
            required
            minLength="3"
          />
        </label>
        <label className={css.recipe_label}>
          <input
            className={css.recipe_input}
            placeholder="Enter about recipe"
            type="text"
            name="description"
            required
            minLength="6"
          />
        </label>
        <div className={css.label_container}></div>
        <label className={css.label} htmlFor="categoryType">
          Category
          <select
            className={css.select_box}
            id="categoryType"
            name="categoryType"
            required
          >
            {categories.map(category => (
              <option className={css.category} value={category} key={category}>
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
              required
            >
              {cookingTimes}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
