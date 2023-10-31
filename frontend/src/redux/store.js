import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipes/slice";
import { myRecipesReducer } from "./myRecipes/slice";
import { favoriteReducer } from "./favorite/slice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    myRecipes: myRecipesReducer,
    favorite: favoriteReducer,
  },
});
