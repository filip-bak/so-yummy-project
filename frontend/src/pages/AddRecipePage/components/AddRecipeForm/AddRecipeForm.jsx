import { useDispatch } from "react-redux";
import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "../RecipePreparationFields/RecipePreparationFields";
import css from "./AddRecipeForm.module.css";
import Button from "components/Button";
import { useState } from "react";
import { addRecipe, updateRecipePicture } from "redux/recipe/actions";
import { toast } from "react-toastify";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();

  const defaultValues = {
    name: "",
    amount: 0,
    amountType: "tbs",
    ingredientId: null,
    expanded: false,
    suggestions: [],
  };
  const [ingredients, setIngredients] = useState([defaultValues]);

  const handleSubmit = e => {
    e.preventDefault();
    const {
      title,
      description,
      categoryType,
      cookingTime,
      thumb,
      preparation,
    } = e.currentTarget.elements;

    const payload = {
      title: title.value,
      description: description.value,
      category: categoryType.value,
      time: cookingTime.value,
      thumb: thumb.name,
      preview: thumb.name,
      ingredients: ingredients
        .filter(ingredient => ingredient.id !== undefined)
        .map(ingredient => ({
          id: ingredient.id,
          measure: `${ingredient.amount} ${ingredient.amountType}`,
        })),
      instructions: preparation.value,
    };
    dispatch(addRecipe(payload)).then(() => {
      toast.success("Your recipe has been created.");
    });
    if (thumb.files[0]) {
      dispatch(updateRecipePicture(thumb));
    }
  };

  return (
    <form
      className={css.form_container}
      name="addrecipe_form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={css.button}>
        <RecipeDescriptionFields />
        <RecipeIngredientsFields
          setIngredients={setIngredients}
          ingredients={[...ingredients]}
          defaultValues={defaultValues}
        />
        <RecipePreparationFields />
        <Button size="large" dark type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};
