import { createSlice } from "@reduxjs/toolkit";
import {
  addMyRecipe,
  fetchMyRecipes,
  fetchMyRecipesNewPage,
  removeMyRecipe,
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

const myRecipesSlice = createSlice({
  name: "myRecipes",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.pending, handlePending)
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.myRecipes;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchMyRecipes.rejected, handleRejected)

      .addCase(fetchMyRecipesNewPage.pending, handlePending)
      .addCase(fetchMyRecipesNewPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.myRecipes;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchMyRecipesNewPage.rejected, handleRejected)

      .addCase(addMyRecipe.pending, handlePending)
      .addCase(addMyRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addMyRecipe.rejected, handleRejected)

      .addCase(removeMyRecipe.pending, handlePending)
      .addCase(removeMyRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = state.items.filter(
          recipe => recipe._id !== action.payload._id
        );
      })
      .addCase(removeMyRecipe.rejected, handleRejected);
  },
});

export const myRecipesReducer = myRecipesSlice.reducer;
