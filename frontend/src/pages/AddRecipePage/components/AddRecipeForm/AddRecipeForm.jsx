import { useDispatch } from "react-redux";
import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "../RecipePreparationFields/RecipePreparationFields";
import css from "./AddRecipeForm.module.css";
import Button from "components/Button";
import { useState } from "react";
import { addRecipe } from "redux/recipe/actions";
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
    const form = e.currentTarget;
    const payload = {
      title: form.elements.title.value,
      description: form.elements.description.value,
      category: form.elements.categoryType.value,
      time: form.elements.cookingTime.value,
      thumb: form.elements.thumb.name,
      preview: form.elements.thumb.name,
      ingredients: ingredients
        .filter(ingredient => ingredient.id !== undefined)
        .map(ingredient => ({
          id: ingredient.id,
          measure: `${ingredient.amount} ${ingredient.amountType}`,
        })),
      instructions: form.elements.preparation.value,
    };
    dispatch(addRecipe(payload)).then(() => {
      toast.success("Your recipe has been created.");
    });
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
