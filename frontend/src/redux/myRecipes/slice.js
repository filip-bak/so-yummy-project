import { createSlice } from "@reduxjs/toolkit";
import { fetchNewPage, fetchMyRecipes } from "./actions";

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
  extraReducers: {
    [fetchMyRecipes.pending]: handlePending,
    [fetchMyRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.myRecipes;
      state.currentPage = action.payload.currentPage;
    },
    [fetchMyRecipes.rejected]: handleRejected,
    [fetchNewPage.pending]: handlePending,
    [fetchNewPage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.myRecipes;
      state.currentPage = action.payload.currentPage;
    },
    [fetchNewPage.rejected]: handleRejected,
  },
});

export const myRecipesReducer = myRecipesSlice.reducer;
