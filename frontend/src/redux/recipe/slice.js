import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipeById } from "./actions";

const initialState = {
  recipe: null,
  isLoading: false,
  error: null,
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
        state.recipe = action.payload.recipe;
      })
      .addCase(fetchRecipeById.rejected, handleRejected);
  },
});

export const recipeReducer = recipeSlice.reducer;
