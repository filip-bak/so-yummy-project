import { createSlice } from "@reduxjs/toolkit";
import { addToFavorite, fetchFavorite, removeFromFavorite } from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  totalPages: 1,
  currentPage: 1,
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFavorite.pending, handlePending)
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.favorite;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchFavorite.rejected, handleRejected)

      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addToFavorite.rejected, handleRejected)

      .addCase(removeFromFavorite.pending, handlePending)
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = state.items.filter(
          recipe => recipe._id !== action.payload.id
        );
      })
      .addCase(removeFromFavorite.rejected, handleRejected);
  },
});

export const favoriteReducer = favoriteSlice.reducer;
