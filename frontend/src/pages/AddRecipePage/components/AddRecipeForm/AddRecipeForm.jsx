import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import css from "./AddRecipeForm.module.css";
import Button from "components/Button";

export const AddRecipeForm = () => {
  return (
    <form
      className={css.form_container}
      name="addrecipe_form"
      autocomplete="on"
    >
      <div className={css.button}>
        <RecipeDescriptionFields />
        <Button size="large" dark type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};
