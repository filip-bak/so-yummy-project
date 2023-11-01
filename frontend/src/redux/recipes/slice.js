import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRecipes,
  fetchRecipesByCategory,
  fetchRecipesById,
  fetchRecipesCategoryList,
  fetchRecipesForMainPage,
  fetchRecipesNewPage,
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentPage: 1,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.recipes;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchRecipes.rejected, handleRejected)

      .addCase(fetchRecipesNewPage.pending, handlePending)
      .addCase(fetchRecipesNewPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.recipes;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchRecipesNewPage.rejected, handleRejected)

      .addCase(fetchRecipesForMainPage.pending, handlePending)
      .addCase(fetchRecipesForMainPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipesForMainPage.rejected, handleRejected)

      .addCase(fetchRecipesById.pending, handlePending)
      .addCase(fetchRecipesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipesById.rejected, handleRejected)

      .addCase(fetchRecipesByCategory.pending, handlePending)
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipesByCategory.rejected, handleRejected)

      .addCase(fetchRecipesCategoryList.pending, handlePending)
      .addCase(fetchRecipesCategoryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipesCategoryList.rejected, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
