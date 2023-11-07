import { createSlice } from "@reduxjs/toolkit";
import { addRecipe, fetchRecipeById, updateRecipePicture } from "./actions";

const initialState = {
  recipe: null,
  isLoading: false,
  error: null,
  ingredients: [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, handleRejected)
      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipe = action.payload;
      })
      .addCase(addRecipe.rejected, handleRejected)

      .addCase(updateRecipePicture.pending, handlePending)
      .addCase(updateRecipePicture.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateRecipePicture.rejected, handleRejected);
  },
});

export const recipeReducer = recipeSlice.reducer;
