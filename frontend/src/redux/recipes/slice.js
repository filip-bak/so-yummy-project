import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./actions";

const initialState = {
  items: [],
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

const recipesSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  extraReducers: {
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchRecipes.rejected]: handleRejected,
  },
});

export const recipesReducer = recipesSlice.reducer;
