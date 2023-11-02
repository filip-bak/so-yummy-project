import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.status = state.status === "light" ? "dark" : "light";
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
