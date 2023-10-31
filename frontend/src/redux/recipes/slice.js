import { createSlice } from "@reduxjs/toolkit";
import { fetchNewPage, fetchRecipes } from "./actions";

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
  extraReducers: {
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.recipes;
      state.currentPage = action.payload.currentPage;
    },
    [fetchRecipes.rejected]: handleRejected,
    [fetchNewPage.pending]: handlePending,
    [fetchNewPage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.result = action.payload.recipes;
      state.currentPage = action.payload.currentPage;
    },
    [fetchNewPage.rejected]: handleRejected,
  },
});

export const recipesReducer = recipesSlice.reducer;
