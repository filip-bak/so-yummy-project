import { createSlice } from "@reduxjs/toolkit";
import {
  addToShoppingList,
  fetchShoppingList,
  removeFromShoppingList,
} from "./actions";

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

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, handlePending)
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchShoppingList.rejected, handleRejected)
      //   .addCase(addToShoppingList.pending, handlePending)
      //   .addCase(addToShoppingList.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     state.items.push(action.payload);
      //   })
      //   .addCase(addToShoppingList.rejected, handleRejected)

      .addCase(removeFromShoppingList.pending, handlePending)
      .addCase(removeFromShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(removeFromShoppingList.rejected, handleRejected);
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
