// import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = state => {
  console.log(state);
  return state.recipes.result;
};
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;
