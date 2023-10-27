import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./actions";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesAppState = {
  result: [],
  error: null,
  isLoading: false,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: recipesAppState,
  extraReducers: {
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.result = action.payload;
    },
    [fetchRecipes.rejected]: handleRejected,
  },
});

export const recipesReducer = recipesSlice.reducer;
