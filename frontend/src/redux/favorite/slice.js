import { createSlice } from "@reduxjs/toolkit";
import { fetchNewPage, fetchFavorite } from "./actions";

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

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  extraReducers: {
    [fetchFavorite.pending]: handlePending,
    [fetchFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.favorite;
      state.currentPage = action.payload.currentPage;
    },
    [fetchFavorite.rejected]: handleRejected,
    [fetchNewPage.pending]: handlePending,
    [fetchNewPage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.favorite;
      state.currentPage = action.payload.currentPage;
    },
    [fetchNewPage.rejected]: handleRejected,
  },
});

export const favoriteReducer = favoriteSlice.reducer;
