import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: builder => {},
});

export const recipesReducer = recipesSlice.reducer;
