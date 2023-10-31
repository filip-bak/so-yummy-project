import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipes/slice";
import { myRecipesReducer } from "./myRecipes/slice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    myRecipes: myRecipesReducer,
  },
});
