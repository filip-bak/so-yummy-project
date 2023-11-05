import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "../RecipePreparationFields/RecipePreparationFields";
import css from "./AddRecipeForm.module.css";
import Button from "components/Button";

export const AddRecipeForm = () => {
  return (
    <form
      className={css.form_container}
      name="addrecipe_form"
      autoComplete="on"
    >
      <div className={css.button}>
        <RecipeDescriptionFields />
        <RecipeIngredientsFields />
        <RecipePreparationFields />
        <Button size="large" dark type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};
